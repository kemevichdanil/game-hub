import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo192.png";
import ColorModeSwith from "./ColorModeSwith";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" />
      <ColorModeSwith />
    </HStack>
  );
};

export default NavBar;
