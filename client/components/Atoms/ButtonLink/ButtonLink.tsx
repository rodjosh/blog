import Link from "next/link";
import Button, { ButtonProps } from "components/Atoms/Button";

interface ButtonLinkProps extends ButtonProps {
	href: string;
}
const ButtonLink = ({ href, ...restButtonProps }: ButtonLinkProps) => {
	return (
		<Link href={href} passHref>
			<Button {...restButtonProps} />
		</Link>
	);
};

export default ButtonLink;
