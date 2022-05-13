import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Box from "components/Atoms/Box";

describe("Box", () => {
  it("Renders text", () => {
    render(<Box>Hello World</Box>);
    screen.getByText(/Hello World/);
  });

  it("Renders box with custom styles", () => {
    render(
      <Box
        backgroundColor="blue"
        borderRadius={15}
        padding={20}
        margin={20}
        display="block"
        overflow="hidden"
        width={[25, "rem"]}
        height={[35, "rem"]}
        order={2}
        flexGrow={2}
        flexShrink={3}
        flexBasis={5}
        alignSelf="flex-start"
      >
        Hello World
      </Box>,
    );
    const box = screen.getByText("Hello World");

    expect(box).toHaveStyle({
      backgroundColor: "#473BF0",
      borderRadius: "15px",
      padding: "20px",
      margin: "20px",
      display: "block",
      overflow: "hidden",
      width: "25rem",
      height: "35rem",
      order: "2",
      flexGrow: "2",
      flexShrink: "3",
      flexBasis: "5",
      alignSelf: "flex-start",
    });
  });

  it("Renders box with custom class", () => {
    render(<Box className="red-box">Hello World</Box>);

    const box = screen.getByText("Hello World");

    expect(box).toHaveClass("red-box");
  });
});
