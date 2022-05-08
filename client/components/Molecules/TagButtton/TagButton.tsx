import Button from "components/Atoms/Button";
import Text from "components/Atoms/Text";
import { BaseComponentProps } from "types/props";

interface TagButtonProps extends BaseComponentProps {}

const TagButton = ({ children }: TagButtonProps) => {
	return (
		<Button backgroundColor="grey" borderRadius="35px" padding="4px 15px">
			<Text fontWeight={600} size={18} color="blue">
				{children}
			</Text>
		</Button>
	);
};

export default TagButton;
