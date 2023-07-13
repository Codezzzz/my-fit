import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AddProjectParams, Project, addProject } from "~/libs/apis/project";

function useProjectAction() {
  const queryClient = useQueryClient();

  const addProjectMutation = useMutation(
    async (params: AddProjectParams) => {
      const response = await addProject(params);
      return { data: response.data, params };
    },
    {
      onSuccess: ({ data, params }) => {
        // update queryCache projects
        queryClient.setQueryData<Project[]>(
          ["projects", "workspace", params.workspaceId],
          prev => {
            const prevData = prev || [];
            return [...prevData, data];
          },
        );
      },
      onError: () => {},
    },
  );
  return { addProjectMutation };
}

export default useProjectAction;
