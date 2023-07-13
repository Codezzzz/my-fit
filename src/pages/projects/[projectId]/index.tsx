import { GetServerSideProps } from "next";
import Link from "next/link";
import Header from "~/components/Header";
import MainLayout from "~/components/layout/MainLayout";
import ProjectListContainer from "~/containers/project/ProjectListContainer";

export type PageProps = {
  projectId: string;
};

function Page({ projectId }: PageProps) {
  return (
    <div>
      <Link href="/projects">project</Link>
      <ProjectListContainer id={Number(projectId)} />
    </div>
  );
}

export default Page;

export const getServerSideProps: GetServerSideProps = async ctx => {
  const projectId = ctx.params?.projectId as PageProps["projectId"];
  return {
    props: {
      projectId,
    },
  };
};

Page.getHeader = function getHeader() {
  return <Header />;
};
Page.getLayout = function getLayout(page: React.ReactNode) {
  return <MainLayout>{page}</MainLayout>;
};
