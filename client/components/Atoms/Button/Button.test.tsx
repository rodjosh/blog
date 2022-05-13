import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Button from "components/Atoms/Button";

describe("Button", () => {
  it("Renders text", () => {
    render(<Button>Hello World</Button>);
    screen.getByText(/Hello World/);
  });

  it("Renders button with custom styles", () => {
    render(
      <Button
        backgroundColor="blue"
        borderStyle="dashed"
        borderRadius={15}
        borderColor="grey"
        borderWidth={15}
        padding={20}
        margin={20}
      >
        Hello World
      </Button>,
    );
    const button = screen.getByRole("button");

    expect(button).toHaveStyle({
      backgroundColor: "#473BF0",
      borderStyle: "dashed",
      borderRadius: "15px",
      borderColor: "#D3D3D3",
      borderWidth: "15px",
      padding: "20px",
      margin: "20px",
    });
  });

  it("Renders button with custom class", () => {
    render(<Button className="red-button">Hello World</Button>);

    const button = screen.getByRole("button");

    expect(button).toHaveClass("red-button");
  });
});
