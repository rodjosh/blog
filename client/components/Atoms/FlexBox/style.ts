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
  ${({
    $flexDirection,
    $flexWrap,
    $flexGrow,
    $justifyContent,
    $alignItems,
    $alignContent,
    $gap,
  }: FlexBoxProps) => {
    let css = "";

    if ($flexDirection) css += `flex-direction: ${$flexDirection};`;
    if ($flexWrap) css += `flex-wrap: ${$flexWrap};`;
    if ($flexGrow) css += `flex-grow: ${$flexGrow};`;
    if ($justifyContent) css += `justify-content: ${$justifyContent};`;
    if ($alignItems) css += `align-items: ${$alignItems};`;
    if ($alignContent) css += `align-content: ${$alignContent};`;
    if ($gap) css += `gap: ${getSpacing($gap)};`;

    return css;
  }}
`;
