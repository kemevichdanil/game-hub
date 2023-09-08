import { Box } from "@chakra-ui/react";
import { ReactElement } from "react";
import { FcMediumPriority, FcOk, FcHighPriority } from "react-icons/fc";
interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;
  const emojiMap: { [key: number]: { src: ReactElement; alt: string } } = {
    3: { src: <FcHighPriority />, alt: "Sad" },
    4: { src: <FcMediumPriority />, alt: "Happy" },
    5: { src: <FcOk />, alt: "Excellent" },
  };
  return (
    <Box marginTop={5} fontSize="16px">
      Emotion: {emojiMap[rating].src}
    </Box>
  );
};

export default Emoji;
