import React, { useContext } from "react";
import { Fab, FabIcon } from "../components/ui";
import { Moon, Sun } from "lucide-react-native";
import { ThemeContext } from "../App";

const MobileModeChangeButton = () => {
  const { colorMode, toggleColorMode } = useContext(ThemeContext);
  return (
    <>
      <Fab onPress={toggleColorMode} className="md:hidden bottom-4 right-4">
        <FabIcon
          as={colorMode === "light" ? Moon : Sun}
          fill={colorMode === "light" ? "#FEFEFF" : "#171717"}
          color={colorMode === "light" ? "#FEFEFF" : "#171717"}
        />
      </Fab>
    </>
  );
};

export default MobileModeChangeButton;
