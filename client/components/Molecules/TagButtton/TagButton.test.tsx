import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import TagButton from "./TagButton";

describe("Button", () => {
  it("Renders text", () => {
    render(<TagButton>Hello World</TagButton>);
    screen.getByText(/Hello World/);
  });

  it("Renders button with custom styles", () => {
    render(<TagButton>Hello World</TagButton>);
    const button = screen.getByRole("button");
    const text = screen.getByText(/Hello World/);

    expect(button).toHaveStyle({
      backgroundColor: "#D3D3D3",
      borderRadius: "35px",
      padding: "4px 15px",
    });

    expect(text).toHaveStyle({
      fontWeight: "600",
      fontSize: "18px",
      color: "#473BF0",
    });
  });

  it("Renders button with custom class", () => {
    render(<TagButton className="red-button">Hello World</TagButton>);

    const button = screen.getByRole("button");

    expect(button).toHaveClass("red-button");
  });
});
