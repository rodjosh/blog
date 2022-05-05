import ButtonLink from "components/Atoms/ButtonLink";
import FlexBox from "components/Atoms/FlexBox";
import Text from "components/Atoms/Text";

import { TextNavItem } from "components/Organisms/Navbar/variants";

import { links } from "data/links";

const Navbar = () => {
  return (
    <FlexBox justifyContent="space-between">
      <ButtonLink href="#">
        <Text fontWeight={700} size="2.25rem" lineHeight="46px">
          Tozi
        </Text>
      </ButtonLink>

      <FlexBox justifyContent="center" gap="1rem">
        {links.map((link) => (
          <ButtonLink key={link.label} href={link.link}>
            <TextNavItem>{link.label}</TextNavItem>
          </ButtonLink>
        ))}
      </FlexBox>

      <ButtonLink href="">
        <Text fontWeight={700} size="1.25rem" lineHeight="1.55rem">
          Login / Register
        </Text>
      </ButtonLink>
    </FlexBox>
  );
};

export default Navbar;
