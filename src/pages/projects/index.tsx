import CustomSuspense from "~/components/atoms/CustomSuspense";
import Header from "~/components/Header";
import MainLayout from "~/components/layout/MainLayout";
import ProjectListContainer from "~/containers/project/ProjectListContainer";

function Projects() {
  return (
    <>
      <CustomSuspense fallback={<>loading</>}>
        <ProjectListContainer id={0} />
      </CustomSuspense>
    </>
  );
}

export default Projects;

Projects.getHeader = function getHeader() {
  return <Header />;
};
Projects.getLayout = function getLayout(page: React.ReactNode) {
  return <MainLayout>{page}</MainLayout>;
};
