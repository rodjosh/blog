import Component from "./PrimaryPost";

const config = {
  title: "Organisms/PrimaryPost - TEMP",
  component: Component,
};

export default config;

export const PrimaryPost = () => (
  <Component
    TextChild1="Headphones"
    TitleChild="Top 10 Best Headphones in 2022 You Can Buy"
    DateChild="February 6th, 2022"
    TimeChild="2 min"
    href="/"
  />
);
