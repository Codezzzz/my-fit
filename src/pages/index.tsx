import Link from "next/link";
import Header from "~/components/Header";
import MainLayout from "~/components/layout/MainLayout";

export default function Home({}) {
  return (
    <>
      <Link href="/projects">project</Link>
    </>
  );
}

Home.getHeader = function getHeader() {
  return <Header />;
};
Home.getLayout = function getLayout(page: React.ReactNode) {
  return <MainLayout>{page}</MainLayout>;
};
