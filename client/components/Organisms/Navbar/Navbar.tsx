import Button from "components/Atoms/Button";
import ButtonLink from "components/Molecules/ButtonLink";
import FlexBox from "components/Atoms/FlexBox";
import Text from "components/Atoms/Text";

import { TextNavItem } from "./variants";

import { links } from "data/links";

const Navbar = () => {
  return (
    <FlexBox justifyContent="space-between" padding={20}>
      <ButtonLink href="#">
        <Text fontWeight={700} size={35}>
          Tozi
        </Text>
      </ButtonLink>

      <FlexBox alignItems="center" justifyContent="center" gap={20}>
        {links.map((link) => (
          <ButtonLink key={link.label} href={link.link}>
            <TextNavItem>{link.label}</TextNavItem>
          </ButtonLink>
        ))}
      </FlexBox>

      <FlexBox alignContent="center" gap={10}>
        <Button backgroundColor="transparent" borderWidth={[0, 0]}>
          <TextNavItem>Login</TextNavItem>
        </Button>

        <FlexBox alignSelf="center">
          <TextNavItem>/</TextNavItem>
        </FlexBox>

        <Button backgroundColor="transparent" borderWidth={[0, 0]}>
          <TextNavItem>Register</TextNavItem>
        </Button>
      </FlexBox>
    </FlexBox>
  );
};

export default Navbar;
