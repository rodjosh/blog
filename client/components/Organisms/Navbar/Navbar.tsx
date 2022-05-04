import ButtonLink from "components/Atoms/ButtonLink";
import FlexBox from "components/Atoms/FlexBox";
import Text from "components/Atoms/Text";
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
					<ButtonLink href={link.link}>
						<Text
							fontWeight={700}
							size="1.25rem"
							lineHeight="1.55rem"
						>
							{link.label}
						</Text>
					</ButtonLink>
				))}
			</FlexBox>
			<ButtonLink href="">
				<Text fontWeight={700} size="1.25rem" lineHeight="1.55rem">
					login/Register
				</Text>
			</ButtonLink>
		</FlexBox>
	);
};

export default Navbar;
