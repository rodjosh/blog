import Button from "components/Atoms/Button";
import ButtonLink from "components/Atoms/ButtonLink";
import FlexBox from "components/Atoms/FlexBox";
import Text from "components/Atoms/Text";

import { TextNavItem } from "components/Organisms/Navbar/variants";

import { links } from "data/links";

const Navbar = () => {
	return (
		<FlexBox justifyContent="space-between" padding="20px">
			<ButtonLink href="#">
				<Text fontWeight={700} size={35}>
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

			<FlexBox alignContent="center" gap="10px">
				<Button>
					<TextNavItem>Login</TextNavItem>
				</Button>

				<FlexBox alignSelf="center">
					<TextNavItem>/</TextNavItem>
				</FlexBox>

				<Button>
					<TextNavItem>Register</TextNavItem>
				</Button>
			</FlexBox>
		</FlexBox>
	);
};

export default Navbar;
