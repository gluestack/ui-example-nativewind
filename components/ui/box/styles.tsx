import { tva } from "@gluestack-ui/nativewind-utils/tva";
import { isWeb } from "@gluestack-ui/nativewind-utils/IsWeb";

const baseStyle = isWeb ? "flex flex-col relative" : "";

export const boxStyle = tva({
  base: baseStyle,
});
