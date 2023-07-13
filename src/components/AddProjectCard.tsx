export type AddProjectCardProps = {
  onClick: () => void;
};

function AddProjectCard({ onClick }: AddProjectCardProps) {
  return <div onClick={onClick}>AddProjectCard</div>;
}

export default AddProjectCard;
