import { BoxProps } from "components/Atoms/Box/Box";

import { type Spacing } from "styles/utils";

import {
  StyleFlexBox,
  type FlexDirection,
  type FlexWrap,
  type JustifyContent,
  type AlignItems,
  type AlignContent,
} from "./style";

interface FlexBoxProps extends Omit<BoxProps, "display"> {
  flexDirection?: FlexDirection;
  flexWrap?: FlexWrap;
  flexGrow?: number;

  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
  alignContent?: AlignContent;

  gap?: Spacing;
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
