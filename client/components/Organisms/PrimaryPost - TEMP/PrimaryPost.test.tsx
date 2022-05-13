import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import PrimaryPost from "./PrimaryPost";

describe("PrimaryPost", () => {
  it("Renders text", () => {
    render(
      <PrimaryPost
        TextChild1="Headphones"
        TitleChild="Top 10 Best Headphones in 2022 You Can Buy"
        DateChild="February 6th, 2022"
        TimeChild="2 min"
        href=""
      />,
    );
    screen.getByText(/^Headphones/);
    screen.getByText(/Top 10 Best Headphones in 2022 You Can Buy/);
    screen.getByText(/February 6th, 2022/);
    screen.getByText(/2 min/);
  });

  it("Renders Navbar with chosen styles", () => {
    render(
      <PrimaryPost
        TextChild1="Headphones"
        TitleChild="Top 10 Best Headphones in 2022 You Can Buy"
        DateChild="February 6th, 2022"
        TimeChild="2 min"
        href="/"
      />,
    );
    const textTitle = screen.getByText(
      /Top 10 Best Headphones in 2022 You Can Buy/,
    );
    const textDate = screen.getByText(/February 6th, 2022/);
    const textTime = screen.getByText(/2 min/);

    const link = screen.getByRole("link");

    expect(textTitle).toHaveStyle({
      fontWeight: "700",
      fontSize: "28px",
    });
    expect(textDate).toHaveStyle({
      fontSize: "14px",
    });
    expect(textTime).toHaveStyle({
      fontSize: "14px",
    });

    expect(link).toHaveAttribute("href", "/");
  });
});
