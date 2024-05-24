import React from "react";
import { HStack, Icon, Pressable, Text, VStack } from "../components/ui";
import ListYourPlaceModal from "./main-content/ListYourPlaceModal";
import MobileSidebarActionsheet from "./MobileSidebarActionsheet";

const MobileBottomTabs = ({ bottomTabs, activeTab, setActiveTab }: any) => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [actionsheetVisible, setActionsheetVisible] = React.useState(false);

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
              className={`${tab.disabled ? "opacity-50" : "opacity-100"}`}
            >
              <VStack className="items-center">
                <Icon
                  as={tab.icon}
                  size={20}
                  className={`${
                    activeTab === tab.label
                      ? "text-primary-500"
                      : "text-typography-400"
                  }`}
                />
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
