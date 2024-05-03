import React, { useContext } from "react";
import { HStack, Icon, Pressable, Text, VStack } from "../components/ui";
import ListYourPlaceModal from "./main-content/ListYourPlaceModal";
import MobileSidebarActionsheet from "./MobileSidebarActionsheet";
import { ThemeContext } from "@/App";

const MobileBottomTabs = ({ bottomTabs, activeTab, setActiveTab }: any) => {
  const { colorMode } = useContext(ThemeContext);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [actionsheetVisible, setActionsheetVisible] = React.useState(false);
  const iconColor = (tab: any) => {
    const lightMode = activeTab === tab.label ? "#333333" : "#A3A3A3";
    const darkMode = activeTab === tab.label ? "#F0F0F0" : "#8C8C8C";
    return colorMode === "light" ? lightMode : darkMode;
  };

  return (
    <>
      <HStack className="content-center absolute bottom-0 justify-between w-full py-3 px-6 md:hidden">
        {bottomTabs.map((tab: any) => {
          return (
            <Pressable
              key={tab.label}
              onPress={() => {
                if (tab.label !== "Listing" && tab.label !== "Filter") {
                  setActiveTab(tab.label);
                }
                if (tab.label === "Listing") {
                  setModalVisible(true);
                }
                if (tab.label === "Filter") {
                  setActionsheetVisible(true);
                }
              }}
              disabled={tab.disabled}
              opacity={tab.disabled ? 0.5 : 1}
            >
              <VStack className="items-center">
                <Icon as={tab.icon} color={iconColor(tab)} size={20} />
                <Text
                  size="xs"
                  className={`${
                    activeTab === tab.label
                      ? "text-typography-900"
                      : "text-typography-400"
                  }`}
                >
                  {tab.label}
                </Text>
              </VStack>
            </Pressable>
          );
        })}
      </HStack>

      <ListYourPlaceModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />

      <MobileSidebarActionsheet
        actionsheetVisible={actionsheetVisible}
        setActionsheetVisible={setActionsheetVisible}
      />
    </>
  );
};

export default MobileBottomTabs;
