import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import tw from "twin.macro";
import Logo from "~/assets/logo.svg";

function Header() {
  const router = useRouter();

  const goMain = () => {
    router.push("/");
  };
  return (
    <div
      css={tw`flex items-center pl-24 pr-24 border-b-2 border-gray-200 h-54`}
    >
      <div css={tw`flex items-center flex-1 gap-20`}>
        <Image src={Logo} alt="logo" css={tw`h-18 w-fit`} onClick={goMain} />
        <Link href="/projects" css={tw`text-14 leading-24`}>
          내프로젝트
        </Link>
      </div>

      <div css={tw`flex`}>1 2 3</div>
    </div>
  );
}

export default Header;
