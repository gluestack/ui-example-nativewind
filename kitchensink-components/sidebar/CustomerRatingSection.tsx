import React, { useContext } from "react";
import { ThemeContext } from "../../App";
import {
  Checkbox,
  CheckboxGroup,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
  CheckIcon,
  Heading,
  Icon,
  VStack,
  StarIcon,
} from "../../components/ui";

const CustomerRatingSection = () => {
  const sidebarFiltersCustomerRatings = [
    {
      label: "5 stars",
      value: "5 stars",
    },
    {
      label: "4+ stars",
      value: "4+ stars",
    },
    {
      label: "3+ stars",
      value: "3+ stars",
    },
    {
      label: "2+ stars",
      value: "2+ stars",
    },
  ];
  const [values, setValues] = React.useState(["wifi", "air-conditioning"]);
  const { colorMode } = useContext(ThemeContext);

  return (
    <VStack space="md" className="w-full">
      <Heading size="sm">Customer Ratings</Heading>
      <CheckboxGroup
        value={values}
        onChange={setValues}
        accessibilityLabel="rating"
      >
        {sidebarFiltersCustomerRatings.map((placeType: any, index: any) => {
          return (
            <Checkbox
              value={placeType.value}
              size="sm"
              key={index}
              accessibilityLabel={placeType.value}
              className="my-2"
            >
              <CheckboxIndicator>
                <CheckboxIcon as={CheckIcon} color="white" />
              </CheckboxIndicator>
              <CheckboxLabel className="flex flex-row items-center gap-1">
                <Icon
                  as={StarIcon}
                  size="2xs"
                  color={colorMode === "light" ? "#262627" : "#F5F5F5"}
                  fill={colorMode === "light" ? "#262627" : "#F5F5F5"}
                />{" "}
                {placeType.label}
              </CheckboxLabel>
            </Checkbox>
          );
        })}
      </CheckboxGroup>
    </VStack>
  );
};
export default CustomerRatingSection;
