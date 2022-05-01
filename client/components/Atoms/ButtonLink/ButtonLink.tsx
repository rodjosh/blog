import Link from "next/link";
import Button, { ButtonProps } from "components/Atoms/Button/Button";

interface ButtonLinkProps extends ButtonProps {
	href: string;
}
const ButtonLink = ({ href, ...restButtonProps }: ButtonLinkProps) => {
	return (
		<Link href={href}>
			<Button {...restButtonProps} />
		</Link>
	);
};

export default ButtonLink;
