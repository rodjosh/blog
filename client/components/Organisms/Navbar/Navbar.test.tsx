import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Navbar from "./Navbar";

describe("Navbar", () => {
  it("Renders text", () => {
    render(<Navbar />);
    screen.getByText(/Tozi/);
    screen.getByText(/Home/);
    screen.getByText(/Login/);
    screen.getByText(/Register/);
  });

  it("Renders Navbar with chosen styles", () => {
    render(<Navbar />);
    const textIcon = screen.getByText(/Tozi/);
    const textLink = screen.getByText(/Home/);
    const textLogin = screen.getByText(/Login/);

    expect(textIcon).toHaveStyle({
      fontWeight: "700",
      fontSize: "35px",
    });
    expect(textLink).toHaveStyle({
      fontWeight: "700",
      fontSize: "20px",
    });
    expect(textLogin).toHaveStyle({
      fontWeight: "700",
      fontSize: "20px",
    });
  });
});
