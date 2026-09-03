import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import type { DataTheme, IComponentBaseProps } from '../types';

export type ThemeControllerProps = Omit<React.ComponentPropsWithoutRef<'input'>, 'type' | 'value' | 'size'> &
  IComponentBaseProps & {
    theme: DataTheme;
    type?: 'checkbox' | 'radio';
  };

const ThemeController = forwardRef<HTMLInputElement, ThemeControllerProps>(
  ({ theme, type = 'checkbox', dataTheme, className, ...props }, ref) => {
    return (
      <input
        {...props}
        ref={ref}
        type={type}
        value={theme}
        data-theme={dataTheme}
        className={twMerge('theme-controller', className)}
      />
    );
  },
);

ThemeController.displayName = 'ThemeController';

export default ThemeController;
