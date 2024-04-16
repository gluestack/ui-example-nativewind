import React from "react";
import {
  Checkbox,
  CheckboxGroup,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
  Heading,
  VStack,
  CheckIcon,
} from "../../components/ui";

const PlaceTypeSection = () => {
  const sidebarFiltersPlaceType = [
    {
      label: "Entire place",
      value: "entirePlace",
    },
    {
      label: "Private room",
      value: "privateRoom",
    },
    {
      label: "Shared room",
      value: "sharedRoom",
    },
  ];

  const [values, setValues] = React.useState(["entirePlace"]);

  return (
    <VStack space="sm">
      <Heading size="sm">Type of place</Heading>
      <CheckboxGroup
        value={values}
        onChange={setValues}
        accessibilityLabel="place-type"
      >
        {sidebarFiltersPlaceType.map((placeType: any) => {
          return (
            <Checkbox
              value={placeType.value}
              size="sm"
              key={placeType.value}
              accessibilityLabel={placeType.value}
              className="my-2 justify-start"
            >
              <CheckboxIndicator>
                <CheckboxIcon as={CheckIcon} color='white'/>
              </CheckboxIndicator>
              <CheckboxLabel>{placeType.label}</CheckboxLabel>
            </Checkbox>
          );
        })}
      </CheckboxGroup>
    </VStack>
  );
};
export default PlaceTypeSection;
