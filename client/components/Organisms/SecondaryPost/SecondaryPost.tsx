import FlexBox from "components/Atoms/FlexBox";
import Box from "components/Atoms/Box";
import TagButton from "components/Molecules/TagButtton";
import Text from "components/Atoms/Text";

import Link from "next/link";
import Image from "next/image";

import { PrimaryPostProps } from "../PrimaryPost";

const SecondaryPost = ({
  TextChild1,
  TitleChild,
  DateChild,
  TimeChild,
  href,
  img,
  imgDesc,
}: PrimaryPostProps) => {
  return (
    <Link href={href} passHref>
      <a style={{ textDecoration: "none" }}>
        <FlexBox gap="1rem" height={93} width={533} borderRadius={15}>
          {!img ? (
            <FlexBox backgroundColor="grey" height={93} width={150}></FlexBox>
          ) : (
            <Box height={93} width={150}>
              <Image src={img} alt={imgDesc}></Image>
            </Box>
          )}

          <FlexBox flexDirection="column" gap="1rem" padding={26}>
            <Text fontWeight={700} size={16}>
              {TitleChild}
            </Text>
            <FlexBox justifyContent="space-between">
              <Text size={12}>{DateChild}</Text>
              <Text size={12}>{TimeChild}</Text>
            </FlexBox>
          </FlexBox>
        </FlexBox>
      </a>
    </Link>
  );
};

export default SecondaryPost;
