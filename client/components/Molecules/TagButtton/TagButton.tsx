import Button from "components/Atoms/Button";
import Text from "components/Atoms/Text";

import { BaseComponentProps } from "types/props";

const TagButton = ({ className, children }: BaseComponentProps) => {
  return (
    <Button
      className={className ?? ""}
      backgroundColor="grey"
      borderRadius={35}
      padding={[5, 15]}
      borderWidth={[0, 0]}
    >
      <Text fontWeight={600} size={14} color="blue">
        {children}
      </Text>
    </Button>
  );
};

export default TagButton;
