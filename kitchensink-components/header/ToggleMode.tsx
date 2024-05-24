import React, { useContext } from "react";
import { Icon, MoonIcon, SunIcon, Button } from "../../components/ui";
import { ThemeContext } from "../../App";

const ToggleMode = () => {
  const { colorMode, toggleColorMode } = useContext(ThemeContext);
  return (
    <Button
      className="p-0 bg-transparent active:bg-transparent hover:bg-transparent"
      onPress={toggleColorMode}
    >
      <Icon
        as={colorMode === "dark" ? SunIcon : MoonIcon}
        size="xl"
        className="stroke-background-700 fill-background-700"
      />
    </Button>
  );
};
export default ToggleMode;
