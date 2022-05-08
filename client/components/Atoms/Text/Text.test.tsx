import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Text from "components/Atoms/Text";

describe("Text", () => {
  it("Renders text", () => {
    render(<Text>Hello World</Text>);
  });
});
