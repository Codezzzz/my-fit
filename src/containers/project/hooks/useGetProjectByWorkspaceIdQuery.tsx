import { useQuery } from "@tanstack/react-query";
import { getProjectByWorkspaceId } from "~/libs/apis/project";

export type UseGetProjectByWorkspaceIdQueryProps = {
  id: number;
};

function useGetProjectByWorkspaceIdQuery({
  id,
}: UseGetProjectByWorkspaceIdQueryProps) {
  const { data } = useQuery(
    ["projects", "workspace", id],
    async () => {
      const response = await getProjectByWorkspaceId(id);
      return response.data;
    },
    {
      suspense: true,
      cacheTime: Infinity,
      staleTime: Infinity,
    },
  );
  return { data };
}

export default useGetProjectByWorkspaceIdQuery;
