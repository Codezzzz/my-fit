import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import tw from "twin.macro";

export type CategoryRootItemProps = {
  img: string | StaticImageData;
  text: string;
  url: string;
};

function CategoryRootItem({ img, text, url }: CategoryRootItemProps) {
  return (
    <Link href={url}>
      <span css={styles()}>
        <Image src={img} alt={text} css={tw`w-[18px] h-[18px] mr-[14px] `} />
        {text}
      </span>
    </Link>
  );
}

export default CategoryRootItem;

const styles = () => [tw`text-red-300`];
