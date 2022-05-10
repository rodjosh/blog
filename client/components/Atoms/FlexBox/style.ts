import styled from "styled-components";

import Box, { BoxProps } from "components/Atoms/Box";

import { type Spacing, getSpacing } from "styles/utils";

export type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse";
export type FlexWrap = "nowrap" | "wrap" | "wrap-reverse";

export type JustifyContent =
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

export type AlignItems =
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

export type AlignContent =
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

interface FlexBoxProps extends BoxProps {
  $flexDirection?: FlexDirection;
  $flexWrap?: FlexWrap;
  $flexGrow?: number;

  $justifyContent?: JustifyContent;
  $alignItems?: AlignItems;
  $alignContent?: AlignContent;
  $gap?: Spacing;
}

export const StyleFlexBox = styled(Box).attrs(() => ({
  display: "flex",
}))<FlexBoxProps>`
  flex-direction: ${({ $flexDirection }) => $flexDirection ?? "row"};
  flex-wrap: ${({ $flexWrap }) => $flexWrap ?? "nowrap"};

  justify-content: ${({ $justifyContent }) => $justifyContent ?? "flex-start"};
  align-items: ${({ $alignItems }) => $alignItems ?? "stretch"};
  align-content: ${({ $alignContent }) => $alignContent ?? "normal"};

  gap: ${({ $gap }) => getSpacing($gap)};
`;
