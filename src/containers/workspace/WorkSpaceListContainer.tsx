import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import tw from "twin.macro";
import { Workspace, getWorkspaceList } from "~/libs/apis/workspace";
import useWorkSpaceAction from "./hooks/useWorkSpaceAction";
import FlexBox from "~/components/atoms/FlexBox";

function WorkSpaceListContainer() {
  const router = useRouter();
  const [workspaces, setWorkspaces] = useState<Workspace[]>([]);
  const { addNewWorkspaceMutation } = useWorkSpaceAction();

  const { data } = useQuery(
    ["workspaces"],
    async () => {
      const response = await getWorkspaceList();
      return response.data;
    },
    {
      suspense: true,
      cacheTime: Infinity,
      staleTime: Infinity,
    },
  );

  useEffect(() => {
    if (data) {
      setWorkspaces(data);
    }
  }, [data]);

  const handleAddNewWorkspace = () => {
    addNewWorkspaceMutation.mutate();
  };
  const activeStyle = (id: string) => {
    const pId = router.query.projectId;

    if (id === pId) {
      return tw`text-blue-500`;
    }
    return tw`text-gray-900`;
  };

  return (
    <FlexBox direction="col" css={tw`items-center`}>
      {workspaces.map(item => (
        <Link
          key={item.id}
          href={`/projects/${item.id}`}
          style={activeStyle(item.id.toString())}
        >
          {item.name}
        </Link>
      ))}

      <button onClick={handleAddNewWorkspace}>새로운 워크 스페이스</button>
    </FlexBox>
  );
}

export default WorkSpaceListContainer;
