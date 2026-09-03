import React, { useCallback, useLayoutEffect, useRef, useState } from 'react';

import { defaultTheme } from '../constants';
import type { DataTheme, IComponentBaseProps } from '../types';
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
    const currentThemeRef = useRef(theme);
    const onChangeRef = useRef(onChange);

    useLayoutEffect(() => {
      onChangeRef.current = onChange;
    }, [onChange]);

    const handleThemeChange = useCallback((nextTheme: DataTheme) => {
      if (nextTheme === currentThemeRef.current) {
        return;
      }

      currentThemeRef.current = nextTheme;
      onChangeRef.current?.(nextTheme);
      setTheme(nextTheme);
    }, []);

    useLayoutEffect(() => {
      const nextTheme = dataTheme || getThemeFromClosestAncestor(themeRef);
      if (nextTheme) {
        handleThemeChange(nextTheme);
      }
    }, [dataTheme, handleThemeChange]);

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
