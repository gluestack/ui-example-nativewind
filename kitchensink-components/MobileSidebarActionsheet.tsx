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
    <Actionsheet
      isOpen={actionsheetVisible}
      onClose={handleClose}
      snapPoints={[80]}  
      // height is not calculated correctly
    >
      <ActionsheetBackdrop />
      <ActionsheetContent className="ios:h-[75vh] web:h-[75vh] w-full">  
      {/* we have to remove the height from ios: known issue */}
        <ActionsheetDragIndicatorWrapper>
          <ActionsheetDragIndicator />
        </ActionsheetDragIndicatorWrapper>
        <Sidebar />
      </ActionsheetContent>
    </Actionsheet>
  );
};
export default MobileSidebarActionsheet;
