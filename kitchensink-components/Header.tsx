import React from "react";
import {
  Box,
  HStack,
  Input,
  InputField,
  InputIcon,
  InputSlot,
  SearchIcon,
} from "../components/ui";
import HeaderTabs from "./header/HeaderTabs";
import HomestayLogo from "./header/HomestayLogo";
import ToggleMode from "./header/ToggleMode";
import UserProfile from "./header/UserProfile";

const Header = React.memo(() => {
  return (
    <Box>
      {/* big screen */}
      <Box className="px-16 w-full border-b hidden md:flex border-outline-100">
        <HStack className="items-center justify-between mx-auto w-full">
          <HomestayLogo />
          <HeaderTabs />
          <HStack space="lg" className="items-center pr-1.5">
            <ToggleMode />
            <UserProfile />
          </HStack>
        </HStack>
      </Box>
      {/* small screen */}
      <Box className="p-5 md:hidden w-full">
        <Input variant="rounded" size="sm" className="w-full h-10">
          <InputField placeholder="Anywhere • Any week • Add guests" />
          <InputSlot className="bg-primary-500 rounded-full h-6 w-6 m-1.5">
            <InputIcon as={SearchIcon} className="stroke-typography-0" />
          </InputSlot>
        </Input>
      </Box>
    </Box>
  );
});
export default Header;
