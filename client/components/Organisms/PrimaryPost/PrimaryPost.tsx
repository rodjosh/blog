import FlexBox from "components/Atoms/FlexBox";
import Text from "components/Atoms/Text";
import TagButton from "components/Molecules/TagButtton";
import Link from "next/link";
import Box from "components/Atoms/Box";
import Image from "next/image";

interface PrimaryPostProps {
  TextChild1?: string;
  TitleChild?: string;
  DateChild?: string;
  TimeChild?: string;
  href: string;
  img?: string;
  imgDesc?: string;
}

const PrimaryPost = ({
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
        <FlexBox
          flexDirection="column"
          gap="1rem"
          height={430}
          width={350}
          borderRadius="15px"
        >
          {!img ? (
            <FlexBox backgroundColor="grey" height={250} width={350}></FlexBox>
          ) : (
            <Box height={250} width={350}>
              <Image src={img} alt={imgDesc}></Image>
            </Box>
          )}

          <FlexBox flexDirection="column" gap="1rem" padding="26px">
            <Box>
              <TagButton>{TextChild1}</TagButton>
            </Box>
            <Text fontWeight={700} size={28}>
              {TitleChild}
            </Text>
            <FlexBox gap="5rem">
              <Text size={14}>{DateChild}</Text>
              <Text size={14}>{TimeChild}</Text>
            </FlexBox>
          </FlexBox>
        </FlexBox>
      </a>
    </Link>
  );
};

export default PrimaryPost;
