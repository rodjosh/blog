import { BoxProps } from "components/Atoms/Box/Box";

import { StyleFlexBox } from "./style";

interface FlexBoxProps extends Omit<BoxProps, "display"> {
  flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
  flexWrap?: "nowrap" | "wrap" | "wrap-reverse";
  flexGrow?: number;
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "start"
    | "end"
    | "left"
    | "right";
  alignItems?:
    | "stretch"
    | "flex-start"
    | "flex-end"
    | "center"
    | "baseline"
    | "first baseline"
    | "last baseline"
    | "start"
    | "end"
    | "self-start"
    | "self-end";
  alignContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "stretch"
    | "start"
    | "end"
    | "baseline"
    | "first baseline"
    | "last baseline";
  gap?: string;
}

const FlexBox = ({
  flexDirection,
  flexWrap,
  flexGrow,
  justifyContent,
  alignItems,
  alignContent,
  gap,
  ...restBoxProps
}: FlexBoxProps) => {
  return (
    <StyleFlexBox
      $flexDirection={flexDirection}
      $flexWrap={flexWrap}
      $flexGrow={flexGrow}
      $justifyContent={justifyContent}
      $alignItems={alignItems}
      $alignContent={alignContent}
      $gap={gap}
      {...restBoxProps}
    />
  );
};

export default FlexBox;
