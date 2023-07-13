import tw, { css, styled } from "twin.macro";

interface DirectionProps {
  direction?: "row" | "col";
  gap: number | string;
}

export const Direction = styled.div<DirectionProps>(
  ({ direction = "row", gap }) => [
    tw`flex w-full h-full`,
    direction === "col" ? tw`flex-col` : tw`flex-row`,
    gapStyle(gap),
  ],
);

const gapStyle = (gap: number | string) => {
  if (typeof gap === "number") {
    return css`
      gap: ${gap}px;
    `;
  }
  return css`
    gap: ${gap};
  `;
};
