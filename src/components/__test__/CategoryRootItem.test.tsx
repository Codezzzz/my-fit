import { render } from "@testing-library/react";
import EmojiSurfer from "~/assets/emoji-surfer.png";
import CategoryRootItem from "../CategoryRootItem";

describe("<CategoryRootItem />", () => {
  const Text = "관심 카테고리";
  const setup = () => {
    const props = {
      img: EmojiSurfer,
      text: Text,
      url: "/",
    };
    const utils = render(<CategoryRootItem {...props} />);
    return {
      ...utils,
    };
  };

  it("이미지 정보, 텍스트 정보 props로 받아서 있어야한다.", () => {
    const { getByText, getByAltText } = setup();
    expect(getByText(Text)).toBeInTheDocument();
    expect(getByAltText(Text)).toBeInTheDocument();
  });

  it("이미지는 18px, 18px크기를 가지며 text와 14px 우측으로 떨어져있다", () => {
    const { getByAltText } = setup();
    expect(getByAltText(Text)).toHaveClass("w-[18px] h-[18px] mr-[14px] ");
  });

  it("text는 span태그로 감싸져있다", () => {
    const { getByText } = setup();
    expect(getByText(Text).tagName).toBe("SPAN");
  });

  it("text의 스타일은 text-[18px] text-white font-bold items-center bg-[rgba(84,86,95,0.2)] pl-[7px] pt-[12px] pr-[7px] pb-[20px]를 가지고 있다", () => {
    const { getByText } = setup();
    expect(getByText(Text)).toHaveClass(
      "w-full text-white text-[18px] font-bold items-center inline-flex bg-[rgba(84,86,95,0.2)] pl-[7px] pt-[12px] pr-[7px] pb-[20px]",
    );
  });

  it("span tag는 a tag로 감싸져있고, link 정보는 props로 받아서 / 패스이다", () => {
    const { getByText, container } = setup();
    expect(getByText(Text).parentElement?.tagName).toBe("A");

    expect(container.querySelector("a")?.getAttribute("href")).toBe("/");
  });
});
