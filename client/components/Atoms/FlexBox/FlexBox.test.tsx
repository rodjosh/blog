import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import FlexBox from "./FlexBox";

describe("FlexBox", () => {
  it("Renders text", () => {
    render(<FlexBox>Hello World</FlexBox>);
    screen.getByText(/Hello World/);
  });

  it("Renders box with custom styles", () => {
    render(
      <FlexBox
        backgroundColor="blue"
        borderRadius={15}
        padding={20}
        margin={20}
        overflow="hidden"
        width={[25, "rem"]}
        height={[35, "rem"]}
        order={2}
        flexGrow={1}
        alignSelf="flex-start"
        flexDirection="column"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        alignContent="space-around"
        gap={[15, 10]}
      >
        Hello World
      </FlexBox>,
    );
    const flexbox = screen.getByText("Hello World");

    expect(flexbox).toHaveStyle({
      "background-color": "#473BF0",
      "border-radius": "15px",
      padding: "20px",
      margin: "20px",
      display: "flex",
      overflow: "hidden",
      width: "25rem",
      height: "35rem",
      order: "2",
      "flex-grow": "1",
      "align-self": "flex-start",
      "flex-direction": "column",
      "flex-wrap": "wrap",
      "justify-content": "center",
      "align-items": "center",
      "align-content": "space-around",
      gap: "15px 10px",
    });
  });

  it("Renders box with custom class", () => {
    render(<FlexBox className="red-flexbox">Hello World</FlexBox>);

    const flexbox = screen.getByText("Hello World");

    expect(flexbox).toHaveClass("red-flexbox");
  });
});
