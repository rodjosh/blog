import Text, { TextProps } from "components/Atoms/Text";

export const TextNavItem = (props: TextProps) => (
  <Text fontWeight={700} size="1.25rem" lineHeight="1.55rem" {...props} />
);
