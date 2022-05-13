import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import ButtonLink from "./ButtonLink";

describe("Button", () => {
  it("Renders text", () => {
    render(<ButtonLink href="">Hello World</ButtonLink>);
    screen.getByText(/Hello World/);
  });

  it("Renders button with custom styles", () => {
    render(
      <ButtonLink
        backgroundColor="blue"
        borderStyle="dashed"
        borderRadius={15}
        borderColor="grey"
        borderWidth={15}
        padding={20}
        margin={20}
        href="/"
      >
        Hello World
      </ButtonLink>,
    );
    const button = screen.getByRole("button");
    const link = screen.getByRole("link");

    expect(button).toHaveStyle({
      backgroundColor: "#473BF0",
      borderStyle: "dashed",
      borderRadius: "15px",
      borderColor: "#D3D3D3",
      borderWidth: "15px",
      padding: "20px",
      margin: "20px",
    });

    expect(link).toHaveAttribute("href", "/");
  });

  it("Renders button with custom class", () => {
    render(
      <ButtonLink href="" className="red-button">
        Hello World
      </ButtonLink>,
    );

    const button = screen.getByRole("button");

    expect(button).toHaveClass("red-button");
  });
});
