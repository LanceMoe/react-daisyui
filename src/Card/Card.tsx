import clsx from 'clsx';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import type { ComponentSize, ComponentVariant, IComponentBaseProps } from '../types';
import type { CardActionsProps as ActionProps } from './CardActions';
import CardActions from './CardActions';
import type { CardBodyProps as BodyProps } from './CardBody';
import CardBody from './CardBody';
import type { CardImageProps as ImageProps } from './CardImage';
import CardImage from './CardImage';
import type { CardTitleProps as TitleProps } from './CardTitle';
import CardTitle from './CardTitle';

export type CardActionsProps = ActionProps;
export type CardBodyProps = BodyProps;
export type CardTitleProps = TitleProps;
export type CardImageProps = ImageProps;

export type CardProps = React.ComponentPropsWithoutRef<'div'> &
  IComponentBaseProps & {
    size?: ComponentSize;
    border?: boolean;
    bordered?: boolean;
    normal?: boolean;
    compact?: boolean;
    variant?: Exclude<ComponentVariant, 'soft'> | 'border';
    imageFull?: boolean;

    side?: ComponentSize | boolean;
  };

type ModifierMap = {
  [key: string]: {
    [key: string]: string | undefined;
  };
};

const DYNAMIC_MODIFIERS: ModifierMap = {
  side: {
    true: 'card-side',
    xs: 'xs:card-side',
    sm: 'sm:card-side',
    md: 'md:card-side',
    lg: 'lg:card-side',
    xl: 'xl:card-side',
  },
};

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      size,
      border = true,
      bordered,
      normal,
      compact,
      variant,
      imageFull,
      side,
      dataTheme,
      className,
      children,
      ...props
    },
    ref,
  ): React.JSX.Element => {
    const classes = twMerge(
      'card',
      className,
      clsx({
        'card-xl': size === 'xl',
        'card-lg': size === 'lg',
        'card-md': size === 'md',
        'card-sm': size === 'sm',
        'card-xs': size === 'xs',
        'card-dash': variant === 'dash',
        'card-border': border || bordered || variant === 'outline' || variant === 'border',
        '[--card-p:1rem]': compact,
        'rounded-box': normal,
        'image-full': imageFull,
        [(side && DYNAMIC_MODIFIERS.side[side.toString()]) || '']: side,
      }),
    );

    return (
      <div aria-label="Card" {...props} data-theme={dataTheme} className={classes} ref={ref}>
        {children}
      </div>
    );
  },
);

export default Object.assign(Card, {
  Actions: CardActions,
  Body: CardBody,
  Title: CardTitle,
  Image: CardImage,
});
