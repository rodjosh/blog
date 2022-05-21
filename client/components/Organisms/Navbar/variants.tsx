import Text, { TextProps } from "components/Atoms/Text";

export const TextNavItem = (props: TextProps) => {
  return <Text fontWeight={700} size={20} {...props} />;
};
