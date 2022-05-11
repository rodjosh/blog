import Component from "./SecondaryPost";

const config = {
  title: "Organisms/SecondaryPost",
  component: Component,
};

export default config;

export const SecondaryPost = () => (
  <Component
    TextChild1="Headphones"
    TitleChild="Top 10 Best Headphones in 2022 You Can Buy"
    DateChild="February 6th, 2022"
    TimeChild="2 min"
    href="/"
  />
);
