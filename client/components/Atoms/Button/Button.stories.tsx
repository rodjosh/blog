import Component from "./Button";

const config = {
  title: "Atoms/Button",
  component: Component,
};

export default config;

export const Button = () => (
  <Component
    borderWidth={4}
    backgroundColor="blue"
    borderRadius={10}
    padding={[10, 25]}
    borderColor="white"
  >
    Hello World
  </Component>
);
