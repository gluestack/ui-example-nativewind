import React from "react";
import {
  Actionsheet,
  ActionsheetDragIndicatorWrapper,
  ActionsheetDragIndicator,
  ActionsheetBackdrop,
  ActionsheetContent,
} from "../components/ui";
import Sidebar from "./Sidebar";

const MobileSidebarActionsheet = ({
  actionsheetVisible,
  setActionsheetVisible,
}: any) => {
  const handleClose = () => {
    setActionsheetVisible(false);
  };
  return (
    <Actionsheet isOpen={actionsheetVisible} onClose={handleClose}>
      <ActionsheetBackdrop />
      <ActionsheetContent className="h-[75vh] w-full">
        <ActionsheetDragIndicatorWrapper>
          <ActionsheetDragIndicator />
        </ActionsheetDragIndicatorWrapper>
        <Sidebar />
      </ActionsheetContent>
    </Actionsheet>
  );
};
export default MobileSidebarActionsheet;
