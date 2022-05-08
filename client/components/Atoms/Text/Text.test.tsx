import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Text from "components/Atoms/Text";

describe("Text", () => {
  it("Renders text", () => {
    render(<Text>Hello World</Text>);
    screen.getByText(/Hello World/);
  });

  it("Renders text with custom size", () => {
    render(<Text size={20}>Hello World</Text>);
    const text = screen.getByText(/Hello World/);

    expect(text).toHaveStyle({
      fontSize: "20px",
    });
  });

  it("Renders text with custom line height", () => {
    render(<Text lineHeight={1.3}>Hello World</Text>);
    const text = screen.getByText(/Hello World/);

    expect(text).toHaveStyle({
      lineHeight: 1.3,
    });
  });

  it("Renders text with custom font weight", () => {
    render(<Text fontWeight={700}>Hello World</Text>);
    const text = screen.getByText(/Hello World/);

    expect(text).toHaveStyle({
      fontWeight: 700,
    });
  });
});
