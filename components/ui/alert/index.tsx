'use client';
import { createAlert } from '@gluestack-ui/alert';
import { View, Text, Platform } from 'react-native';
import { tva } from '@gluestack-ui/nativewind-utils/tva';
import {
  withStyleContext,
  useStyleContext,
} from '@gluestack-ui/nativewind-utils/withStyleContext';
import React, { useMemo } from 'react';
import { Svg } from 'react-native-svg';
import { cssInterop } from 'nativewind';
import type { VariantProps } from '@gluestack-ui/nativewind-utils';
import { withStates } from '@gluestack-ui/nativewind-utils/withStates';

const SCOPE = 'ALERT';

const alertStyle = tva({
  base: 'items-center p-3 rounded flex-row',

  variants: {
    action: {
      error: 'bg-background-error border-error-300 ',
      warning: 'bg-background-warning border-warning-300',
      success: 'bg-background-success border-success-300',
      info: 'bg-background-info border-info-300',
      muted: 'bg-background-muted border-muted-300',
    },

    variant: {
      solid: '',
      outline: 'border bg-transparent',
      accent: 'border-l-4',
    },
  },
  defaultVariants: {
    variant: 'solid',
    action: 'info',
  },
});

const alertTextStyle = tva({
  base: 'text-typography-700 flex-1 font-normal font-body',

  variants: {
    isTruncated: {
      true: 'web:truncate',
    },
    bold: {
      true: 'font-bold',
    },
    underline: {
      true: 'underline',
    },
    strikeThrough: {
      true: 'line-through',
    },
    size: {
      '2xs': 'text-2xs',
      'xs': 'text-xs',
      'sm': 'text-sm',
      'md': 'text-md',
      'lg': 'text-lg',
      'xl': 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl',
      '6xl': 'text-6xl',
    },
    sub: {
      true: 'text-xs',
    },
    italic: {
      true: 'italic',
    },
    highlight: {
      true: 'bg-yellow-500',
    },
  },
});

const alertIconStyle = tva({
  base: 'fill-none',
  variants: {
    size: {
      '2xs': 'h-3 w-3',
      'xs': 'h-3.5 w-3.5',
      'sm': 'h-4 w-4',
      'md': 'h-[18px] w-[18px]',
      'lg': 'h-5 w-5',
      'xl': 'h-6 w-6',
    },
  },
  parentVariants: {
    action: {
      error: 'text-error-500',
      warning: 'text-warning-500',
      success: 'text-success-500',
      info: 'text-info-500',
      muted: 'text-secondary-500',
    },
  },
});

const PrimitiveIcon = React.forwardRef(
  (
    { height, width, fill, color, size, stroke, as: AsComp, ...props }: any,
    ref?: any
  ) => {
    const sizeProps = useMemo(() => {
      return size ? { size } : { height, width };
    }, [size, height, width]);

    let colorProps =
      stroke === 'currentColor' && color !== undefined ? color : stroke;

    if (AsComp) {
      return (
        <AsComp
          ref={ref}
          fill={fill}
          {...props}
          {...sizeProps}
          stroke={colorProps}
        />
      );
    }
    return (
      <Svg
        ref={ref}
        height={height}
        width={width}
        fill={fill}
        stroke={colorProps}
        {...props}
      />
    );
  }
);

export const UIAlert = createAlert({
  Root: withStyleContext(View, SCOPE),
  Text: Text,
  Icon: Platform.OS === 'web' ? PrimitiveIcon : withStates(PrimitiveIcon),
});

cssInterop(UIAlert, { className: 'style' });
//@ts-ignore
cssInterop(UIAlert.Text, { className: 'style' });
cssInterop(UIAlert.Icon, {
  className: {
    target: 'style',
    nativeStyleToProp: {
      height: true,
      width: true,
      // @ts-ignore
      fill: true,
      color: true,
      stroke: true,
    },
  },
});

type IAlertProps = Omit<React.ComponentProps<typeof UIAlert>, 'context'> &
  VariantProps<typeof alertStyle>;
const Alert = React.forwardRef(
  (
    {
      className,
      variant = 'solid',
      action = 'info',
      ...props
    }: { className?: string } & IAlertProps,
    ref?: any
  ) => {
    return (
      <UIAlert
        className={alertStyle({ action, variant, class: className })}
        context={{ variant, action }}
        ref={ref}
        {...props}
      />
    );
  }
);

type IAlertTextProps = React.ComponentProps<typeof UIAlert.Text> &
  VariantProps<typeof alertTextStyle>;
const AlertText = React.forwardRef(
  (
    {
      className,
      isTruncated,
      bold,
      underline,
      strikeThrough,
      size = 'md',
      sub,
      italic,
      highlight,
      ...props
    }: { className?: string } & IAlertTextProps,
    ref?: any
  ) => {
    return (
      <UIAlert.Text
        // @ts-ignore
        className={alertTextStyle({
          isTruncated,
          bold,
          underline,
          strikeThrough,
          size,
          sub,
          italic,
          highlight,
          class: className,
        })}
        {...props}
        ref={ref}
      />
    );
  }
);

type IAlertIconProps = React.ComponentProps<typeof UIAlert.Icon> &
  VariantProps<typeof alertIconStyle>;
const AlertIcon = React.forwardRef(
  (
    {
      className,
      size = 'md',
      ...props
    }: {
      className?: string;
    } & IAlertIconProps,
    ref?: any
  ) => {
    const { action: parentAction } = useStyleContext(SCOPE);

    if (typeof size === 'number') {
      return (
        <UIAlert.Icon
          ref={ref}
          {...props}
          className={alertIconStyle({ class: className })}
          size={size}
        />
      );
    } else if (
      (props.height !== undefined || props.width !== undefined) &&
      size === undefined
    ) {
      return (
        <UIAlert.Icon
          ref={ref}
          {...props}
          className={alertIconStyle({ class: className })}
        />
      );
    }
    return (
      <UIAlert.Icon
        className={alertIconStyle({
          parentVariants: {
            action: parentAction,
          },
          size,
          class: className,
        })}
        {...props}
        ref={ref}
      />
    );
  }
);

Alert.displayName = 'Alert';
AlertText.displayName = 'AlertText';
AlertIcon.displayName = 'AlertIcon';

export { Alert, AlertText, AlertIcon };
