import * as S from "./style";
export type FlexBoxProps = {
  children: React.ReactNode;
  direction?: "row" | "col";
  gap?: number;
} & React.HTMLAttributes<HTMLDivElement>;

function FlexBox({
  children,
  direction = "row",
  gap = 0,
  ...rest
}: FlexBoxProps) {
  return (
    <S.Direction direction={direction} gap={gap} {...rest}>
      {children}
    </S.Direction>
  );
}

export default FlexBox;
