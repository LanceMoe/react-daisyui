import clsx from 'clsx';
import React, { forwardRef, useId } from 'react';
import { twMerge } from 'tailwind-merge';

import CollapseContent from '../Collapse/CollapseContent';
import CollapseTitle from '../Collapse/CollapseTitle';
import type { IComponentBaseProps } from '../types';

export type AccordionProps = Omit<React.ComponentPropsWithoutRef<'input'>, 'type'> &
  IComponentBaseProps & {
    name?: string;
    icon?: 'arrow' | 'plus';
  };

const Accordion = forwardRef<HTMLInputElement, AccordionProps>(
  ({ name, icon, dataTheme, className, children, ...props }, ref): React.JSX.Element => {
    const generatedName = useId();
    const classes = twMerge(
      'collapse',
      clsx({
        'collapse-arrow': icon === 'arrow',
        'collapse-plus': icon === 'plus',
      }),
      className,
    );

    return (
      <div data-theme={dataTheme} className={classes}>
        <input {...props} ref={ref} type="radio" name={name || generatedName} />
        {children}
      </div>
    );
  },
);

Accordion.displayName = 'Accordion';

export default Object.assign(Accordion, {
  Title: CollapseTitle,
  Content: CollapseContent,
});
