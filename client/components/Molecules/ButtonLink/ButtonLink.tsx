import Link from "next/link";

import Button, { ButtonProps } from "components/Atoms/Button/Button";

interface ButtonLinkProps extends ButtonProps {
  href: string;
}
const ButtonLink = ({ href, ...restButtonProps }: ButtonLinkProps) => {
  return (
    <Link href={href} passHref>
      <a>
        <Button
          borderWidth={[0, 0]}
          backgroundColor="transparent"
          {...restButtonProps}
        />
      </a>
    </Link>
  );
};

export default ButtonLink;
