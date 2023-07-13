import FlexBox from "~/components/atoms/FlexBox";
import useGetProjectByWorkspaceIdQuery from "./hooks/useGetProjectByWorkspaceIdQuery";
import useProjectAction from "./hooks/useProjectAction";
import AddProjectCard from "~/components/AddProjectCard";

export type ProjectListContainerProps = {
  id: number;
};

function ProjectListContainer({ id }: ProjectListContainerProps) {
  const { data } = useGetProjectByWorkspaceIdQuery({ id });
  const { addProjectMutation } = useProjectAction();

  const handleAddProject = () => {
    addProjectMutation.mutate({
      workspaceId: id,
      name: "New Pro",
    });
  };
  if (!data) return <></>;

  return (
    <FlexBox direction="col">
      {data.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}

      <AddProjectCard onClick={handleAddProject} />
    </FlexBox>
  );
}

export default ProjectListContainer;
