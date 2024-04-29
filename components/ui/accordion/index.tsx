'use client';
import React, { useMemo } from 'react';
import { createAccordion } from '@gluestack-ui/accordion';
import { Svg } from 'react-native-svg';
import { View, Pressable, Text, Platform } from 'react-native';
import { tva } from '@gluestack-ui/nativewind-utils/tva';
import type { VariantProps } from '@gluestack-ui/nativewind-utils';
import {
  withStyleContext,
  useStyleContext,
} from '@gluestack-ui/nativewind-utils/withStyleContext';
import { withStyleContextAndStates } from '@gluestack-ui/nativewind-utils/withStyleContextAndStates';
import { H3 } from '@expo/html-elements';
import { cssInterop } from 'nativewind';

const SCOPE = 'ACCORDION';
/** Styles */

const accordionStyle = tva({
  base: 'w-full',
  variants: {
    variant: {
      filled: 'bg-white',
    },
    size: {
      sm: '',
      md: '',
      lg: '',
    },
  },
});
const accordionItemStyle = tva({
  parentVariants: {
    variant: {
      filled: 'bg-background-0',
      unfilled: 'bg-transparent',
    },
  },
});
const accordionTitleTextStyle = tva({
  base: 'text-typography-900 font-bold flex-1 text-left',
  parentVariants: {
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
    },
  },
});
const accordionIconStyle = tva({
  base: '',
  parentVariants: {
    size: {
      '2xs': 'h-3 w-3',
      'xs': 'h-3.5 w-3.5',
      'sm': 'h-4 w-4',
      'md': 'h-[18px] w-[18px]',
      'lg': 'h-5 w-5',
      'xl': 'h-6 w-6',
    },
  },
});
const accordionContentTextStyle = tva({
  base: 'text-typography-700 font-normal',
  parentVariants: {
    size: {
      sm: 'text-sm ',
      md: 'text-base',
      lg: 'text-lg',
    },
  },
});
const accordionHeaderStyle = tva({
  base: 'mx-0 my-0',
});
const accordionContentStyle = tva({
  base: 'px-5 mt-2 pb-5',
});
const accordionTriggerStyle = tva({
  base: 'w-full py-5 px-5 flex-row justify-between items-center web:outline-none focus:outline-none data-[disabled=true]:opacity-40 data-[disabled=true]:cursor-not-allowed data-[focus-visible=true]:bg-background-50',
});

const PrimitiveIcon = React.forwardRef(
  (
    { height, width, fill = 'none', color, size, as: AsComp, ...props }: any,
    ref?: any
  ) => {
    const sizeProps = useMemo(() => {
      return size ? { size } : { height, width };
    }, [size, height, width]);

    if (AsComp) {
      return (
        <AsComp ref={ref} fill={fill} color={color} {...props} {...sizeProps} />
      );
    }
    return (
      <Svg
        ref={ref}
        height={height}
        width={width}
        fill={fill}
        color={color}
        {...props}
      />
    );
  }
);

const Root =
  Platform.OS === 'web'
    ? withStyleContext(View, SCOPE)
    : withStyleContextAndStates(View, SCOPE);

const Header = Platform.OS === 'web' ? H3 : View;
/** Creator */
const UIAccordion = createAccordion({
  Root: Root,
  Item: View,
  //@ts-ignore
  Header: Header,
  Trigger: Pressable,
  Icon: PrimitiveIcon,
  TitleText: Text,
  ContentText: Text,
  Content: View,
});

cssInterop(UIAccordion, { className: 'style' });
cssInterop(UIAccordion.Item, { className: 'style' });
cssInterop(UIAccordion.Header, { className: 'style' });
cssInterop(UIAccordion.Trigger, { className: 'style' });
cssInterop(UIAccordion.Icon, { className: 'style' });
cssInterop(UIAccordion.TitleText, { className: 'style' });
cssInterop(UIAccordion.Content, { className: 'style' });
cssInterop(UIAccordion.ContentText, { className: 'style' });
// @ts-ignore
cssInterop(UIAccordion.Icon, {
  className: {
    target: 'style',
    nativeStyleToProp: {
      height: 'height',
      width: 'width',
      //@ts-ignore
      fill: 'fill',
      color: 'color',
    },
  },
});

type IAccordionProps = React.ComponentProps<typeof UIAccordion> &
  VariantProps<typeof accordionStyle>;

type IAccordionItemProps = React.ComponentProps<typeof UIAccordion.Item> &
  VariantProps<typeof accordionItemStyle>;

type IAccordionContentProps = React.ComponentProps<typeof UIAccordion.Content> &
  VariantProps<typeof accordionContentStyle>;

type IAccordionContentTextProps = React.ComponentProps<
  typeof UIAccordion.ContentText
> &
  VariantProps<typeof accordionContentTextStyle>;

type IAccordionIconProps = VariantProps<typeof accordionIconStyle> &
  React.ComponentProps<typeof UIAccordion.Icon> & {
    as?: any;
  };

type IAccordionHeaderProps = React.ComponentProps<typeof UIAccordion.Header> &
  VariantProps<typeof accordionHeaderStyle>;

type IAccordionTriggerProps = React.ComponentProps<typeof UIAccordion.Trigger> &
  VariantProps<typeof accordionTriggerStyle>;

type IAccordionTitleTextProps = React.ComponentProps<
  typeof UIAccordion.TitleText
> &
  VariantProps<typeof accordionTitleTextStyle>;

/** Components */

const Accordion = React.forwardRef(
  (
    {
      className,
      variant = 'filled',
      size = 'md',
      ...props
    }: { className?: string } & IAccordionProps,
    ref?: any
  ) => {
    return (
      <UIAccordion
        ref={ref}
        {...props}
        className={accordionStyle({ variant, class: className })}
        context={{ variant, size }}
      />
    );
  }
);

const AccordionItem = React.forwardRef(
  (
    { className, ...props }: { className?: string } & IAccordionItemProps,
    ref?: any
  ) => {
    const { variant } = useStyleContext(SCOPE);
    return (
      <UIAccordion.Item
        ref={ref}
        {...props}
        className={accordionItemStyle({
          parentVariants: { variant },
          class: className,
        })}
      />
    );
  }
);

const AccordionContent = React.forwardRef(
  (
    { className, ...props }: { className?: string } & IAccordionContentProps,
    ref?: any
  ) => {
    return (
      <UIAccordion.Content
        ref={ref}
        {...props}
        className={accordionContentStyle({
          class: className,
        })}
      />
    );
  }
);

const AccordionContentText = React.forwardRef(
  (
    {
      className,
      ...props
    }: { className?: string } & IAccordionContentTextProps,
    ref?: any
  ) => {
    const { size } = useStyleContext(SCOPE);
    return (
      <UIAccordion.ContentText
        ref={ref}
        {...props}
        className={accordionContentTextStyle({
          parentVariants: { size },
          class: className,
        })}
      />
    );
  }
);

const AccordionIcon = React.forwardRef(
  (
    {
      size,
      className,
      color = 'gray',
      ...props
    }: IAccordionIconProps & {
      className?: any;
      fill?: string;
      as?: any;
      color?: string;
    },
    ref?: any
  ) => {
    const { size: parentSize } = useStyleContext(SCOPE);

    if (typeof size === 'number') {
      return (
        <UIAccordion.Icon
          ref={ref}
          {...props}
          color={color}
          className={accordionIconStyle({ class: className })}
          size={size}
        />
      );
    } else if (
      (props.height !== undefined || props.width !== undefined) &&
      size === undefined
    ) {
      return (
        <UIAccordion.Icon
          ref={ref}
          {...props}
          color={color}
          className={accordionIconStyle({ class: className })}
        />
      );
    }
    return (
      <UIAccordion.Icon
        ref={ref}
        color={color}
        {...props}
        className={accordionIconStyle({
          size,
          class: className,
          parentVariants: { size: parentSize },
        })}
      />
    );
  }
);

const AccordionHeader = React.forwardRef(
  (
    { className, ...props }: { className?: string } & IAccordionHeaderProps,
    ref?: any
  ) => {
    return (
      <UIAccordion.Header
        ref={ref}
        {...props}
        className={accordionHeaderStyle({
          class: className,
        })}
      />
    );
  }
);
const AccordionTrigger = React.forwardRef(
  (
    { className, ...props }: { className?: string } & IAccordionTriggerProps,
    ref?: any
  ) => {
    return (
      <UIAccordion.Trigger
        ref={ref}
        {...props}
        className={accordionTriggerStyle({
          class: className,
        })}
      />
    );
  }
);
const AccordionTitleText = React.forwardRef(
  (
    { className, ...props }: { className?: string } & IAccordionTitleTextProps,
    ref?: any
  ) => {
    const { size } = useStyleContext(SCOPE);
    return (
      <UIAccordion.TitleText
        ref={ref}
        {...props}
        className={accordionTitleTextStyle({
          parentVariants: { size },
          class: className,
        })}
      />
    );
  }
);

Accordion.displayName = 'Accordion';
AccordionItem.displayName = 'AccordionItem';
AccordionHeader.displayName = 'AccordionHeader';
AccordionTrigger.displayName = 'AccordionTrigger';
AccordionTitleText.displayName = 'AccordionTitleText';
AccordionContentText.displayName = 'AccordionContentText';
AccordionIcon.displayName = 'AccordionIcon';
AccordionContent.displayName = 'AccordionContent';

export {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionTitleText,
  AccordionContentText,
  AccordionIcon,
  AccordionContent,
};
