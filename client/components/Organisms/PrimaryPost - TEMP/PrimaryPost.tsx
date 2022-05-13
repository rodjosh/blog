import Link from "next/link";
import Image from "next/image";

import FlexBox from "components/Atoms/FlexBox";
import Text from "components/Atoms/Text";
import TagButton from "components/Molecules/TagButtton";
import Box from "components/Atoms/Box";

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
      <a>
        <FlexBox
          flexDirection="column"
          gap={20}
          height={430}
          width={350}
          borderRadius={15}
        >
          {!img ? (
            <FlexBox backgroundColor="grey" height={250} width={350} />
          ) : (
            <Box height={250} width={350}>
              <Image src={img} alt={imgDesc} />
            </Box>
          )}

          <FlexBox flexDirection="column" gap={20} padding={26}>
            <Box>
              <TagButton>{TextChild1}</TagButton>
            </Box>
            <Text fontWeight={700} size={28}>
              {TitleChild}
            </Text>
            <FlexBox justifyContent="space-between">
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