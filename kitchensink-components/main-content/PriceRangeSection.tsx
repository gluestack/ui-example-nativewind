import React from "react";
import {
  Checkbox,
  Slider,
  Text,
  Tooltip,
  VStack,
  Heading,
  CheckboxGroup,
  SliderTrack,
  SliderFilledTrack,
  CheckboxIndicator,
  CheckboxLabel,
  CheckboxIcon,
  CheckIcon,
  SliderThumb,
  TooltipContent
} from "../../components/ui";

const PriceRangeSection = () => {
  const [sliderValue, setSliderValue] = React.useState(3500);
  const [values, setValues] = React.useState(["entirePlace"]);
  const handleChange = (value: any) => {
    setSliderValue(value);
  };

  const sidebarFiltersPriceRange = [
    {
      label: "below ₹2001",
      value: "below ₹2001",
    },
    {
      label: "₹2001 - ₹3000",
      value: "₹2001 - ₹3000",
    },
    {
      label: "₹3001 - ₹4001",
      value: "₹3001 - ₹4001",
    },
    {
      label: "above ₹3001",
      value: "above ₹3001",
    },
  ];

  return (
    <VStack space="md">
      <Heading size="sm">Price Range</Heading>
      <Slider
        minValue={800}
        maxValue={5000}
        w="100%"
        size="sm"
        value={sliderValue}
        onChange={(value: any) => {
          handleChange(value);
        }}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <Tooltip
          placement="bottom"
          trigger={(triggerProps: any) => {
            return <SliderThumb {...triggerProps} />;
          }}
        >
          <TooltipContent>
            <Text className="white">₹{sliderValue}</Text>
          </TooltipContent>
        </Tooltip>
      </Slider>
      <CheckboxGroup
        value={values}
        onChange={setValues}
        className="mt-3"
        accessibilityLabel="price filter"
      >
        {sidebarFiltersPriceRange.map((priceRange: any) => {
          return (
            <Checkbox
              value={priceRange.value}
              size="sm"
              className="my-2"
              key={priceRange.value}
              accessibilityLabel={priceRange.value}
            >
              <CheckboxIndicator>
                <CheckboxIcon as={CheckIcon} />
              </CheckboxIndicator>
              <CheckboxLabel className="ml-2">{priceRange.label}</CheckboxLabel>
            </Checkbox>
          );
        })}
      </CheckboxGroup>
    </VStack>
  );
};
export default PriceRangeSection;
