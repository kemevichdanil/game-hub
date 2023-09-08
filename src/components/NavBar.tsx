import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo192.png";
import ColorModeSwith from "./ColorModeSwith";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwith />
    </HStack>
  );
};

export default NavBar;
