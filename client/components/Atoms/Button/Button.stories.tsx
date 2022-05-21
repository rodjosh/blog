import Component from "./Button";

const config = {
  title: "Atoms/Button",
  component: Component,
};

export default config;

export const Button = () => (
  <Component
    borderWidth={[0, 0]}
    backgroundColor="blue"
    borderRadius={10}
    padding={[10, 25]}
  >
    Hello World
  </Component>
);
