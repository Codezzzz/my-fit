import tw, { styled } from "twin.macro";
import { WorkSpaceListContainer } from "~/containers/workspace";

function Drawer() {
  return (
    <Wrapper>
      <WorkSpaceListContainer />
    </Wrapper>
  );
}

export default Drawer;

export const SkeletonDrawer = () => {
  return <Wrapper></Wrapper>;
};

const Wrapper = styled.div`
  ${tw`h-full text-gray-900 border-r-2 border-gray-200 w-230`}
`;
