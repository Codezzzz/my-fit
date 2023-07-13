import { lazy } from "react";
import CustomSuspense from "../atoms/CustomSuspense";
import FlexBox from "../atoms/FlexBox";
import { SkeletonDrawer } from "./Drawer";

const Drawer = lazy(() => import("./Drawer"));

export type MainLayoutProps = {
  children: React.ReactNode;
};

function MainLayout({ children }: MainLayoutProps) {
  return (
    <FlexBox>
      <CustomSuspense fallback={<SkeletonDrawer />}>
        <Drawer />
      </CustomSuspense>
      {children}
    </FlexBox>
  );
}

export default MainLayout;
