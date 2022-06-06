import Component from "./Box";

const config = {
  title: "Atoms/Box",
  component: Component,
};

export default config;

export const Box = () => (
  <Component
    borderRadius={8}
    backgroundColor="blue"
    padding={[10, 20]}
    borderColor="white"
    borderWidth={5}
  >
    Hello World
  </Component>
);
