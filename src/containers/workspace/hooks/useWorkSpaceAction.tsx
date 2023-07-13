import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Workspace, addWorkspace } from "~/libs/apis/workspace";

function useWorkSpaceAction() {
  const queryClient = useQueryClient();
  const addNewWorkspaceMutation = useMutation(
    async () => {
      const response = await addWorkspace("New Workspace");
      return response.data;
    },
    {
      onSuccess: data => {
        console.log(data);
        // update queryCache workspaces
        queryClient.setQueryData<Workspace[]>(["workspaces"], prev => {
          const prevData = prev || [];
          return [...prevData, data];
        });
      },
      onError: () => {},
    },
  );
  return { addNewWorkspaceMutation };
}

export default useWorkSpaceAction;
