import React from "react";
import { ScrollView } from "react-native";
import { VStack } from "../components/ui";
import AmenitiesSection from "./sidebar/AmenitiesSection";
import BookingOptions from "./sidebar/BookingOptions";
import CustomerRatingSection from "./sidebar/CustomerRatingSection";
import FiltersAppliedSection from "./sidebar/FiltersAppliedSection";
import PlaceTypeSection from "./sidebar/PlaceTypeSection";
import PriceRangeSection from "./sidebar/PriceRangeSection";
import SortBySection from "./sidebar/SortBySection";

const Sidebar = () => {
  return (
    <ScrollView>
      <VStack space="xl" className="py-6 px-4">
        <FiltersAppliedSection />
        <VStack space="xl" className="px-2">
          <SortBySection />
          <PlaceTypeSection />
          <AmenitiesSection />
          <PriceRangeSection />
          <BookingOptions />
          <CustomerRatingSection />
        </VStack>
      </VStack>
    </ScrollView>
  );
};
export default Sidebar;
