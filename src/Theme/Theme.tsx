import React, { useCallback, useLayoutEffect, useRef, useState } from 'react';

import { defaultTheme } from '../constants';
import { DataTheme, IComponentBaseProps } from '../types';
import { ThemeContext } from './ThemeContext';
import { getThemeFromClosestAncestor } from './utils';

export type ThemeProps = Omit<React.ComponentPropsWithoutRef<'div'>, 'onChange'> &
  IComponentBaseProps & {
    onChange?: (theme: DataTheme) => void;
  };

const Theme = React.forwardRef<HTMLDivElement, ThemeProps>(
  ({ children, dataTheme, onChange, className, ...props }, ref): React.JSX.Element => {
    const themeRef = useRef<HTMLDivElement>(null);
    const [theme, setTheme] = useState<DataTheme>(dataTheme || defaultTheme);

    const handleThemeChange = useCallback(
      (nextTheme: DataTheme) => {
        // Fire custom onChange, if provided. ie, user provided function to store theme in session/local storage
        if (onChange) {
          onChange(nextTheme);
        }
        // Update state/context
        setTheme(nextTheme);
      },
      [onChange],
    );

    useLayoutEffect(() => {
      if (dataTheme) {
        if (dataTheme !== theme) {
          handleThemeChange(dataTheme);
        }
        return;
      }

      const closestAncestorTheme = getThemeFromClosestAncestor(themeRef);
      if (closestAncestorTheme && closestAncestorTheme !== theme) {
        handleThemeChange(closestAncestorTheme);
      }
    }, [dataTheme, handleThemeChange, theme]);

    const setThemeRef = (element: HTMLDivElement | null) => {
      themeRef.current = element;
      if (typeof ref === 'function') {
        ref(element);
      } else if (ref) {
        ref.current = element;
      }
    };

    return (
      <ThemeContext.Provider value={{ theme, setTheme: handleThemeChange }}>
        <div {...props} data-theme={theme} className={className} ref={setThemeRef}>
          {children}
        </div>
      </ThemeContext.Provider>
    );
  },
);
export default Theme;
