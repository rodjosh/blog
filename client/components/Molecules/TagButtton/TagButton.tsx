import Button from "components/Atoms/Button";
import Text from "components/Atoms/Text";

import { BaseComponentProps } from "types/props";

const TagButton = ({ className, children }: BaseComponentProps) => {
  return (
    <Button
      className={className ?? ""}
      backgroundColor="grey"
      borderRadius={35}
      padding={[4, 15]}
    >
      <Text fontWeight={600} size={18} color="blue">
        {children}
      </Text>
    </Button>
  );
};

export default TagButton;
