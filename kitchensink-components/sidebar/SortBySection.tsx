import React from "react";
import {
  CircleIcon,
  Heading,
  Radio,
  RadioGroup,
  RadioIndicator,
  RadioLabel,
  VStack,
  RadioIcon,
} from "../../components/ui";

const SortBySection = () => {
  const sidebarFiltersCustomerRatings = [
    {
      label: "Top ratings",
      value: "Top ratings",
    },
    {
      label: "Best price",
      value: "Best price",
    },
    {
      label: "Discount",
      value: "Discount",
    },
    {
      label: "What’s new",
      value: "What’s new",
    },
  ];
  const [values, setValues] = React.useState("Top ratings");

  return (
    <VStack space="sm">
      <Heading size="sm">Sort by</Heading>
      <RadioGroup
        value={values}
        onChange={setValues}
        accessibilityLabel="sort-by filter"
      >
        {sidebarFiltersCustomerRatings.map((placeType: any) => {
          return (
            <Radio
              value={placeType.value}
              size="sm"
              key={placeType.value}
              className='justify-start my-2'
            >
              <RadioIndicator>
                <RadioIcon as={CircleIcon} color='#E11d48' />
              </RadioIndicator>
              <RadioLabel>{placeType.label}</RadioLabel>
            </Radio>
          );
        })}
      </RadioGroup>
    </VStack>
  );
};
export default SortBySection;
