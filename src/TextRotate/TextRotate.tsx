import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import type { IComponentBaseProps } from '../types';

export type TextRotateProps = React.ComponentPropsWithoutRef<'span'> &
  IComponentBaseProps & {
    texts?: React.ReactNode[];
  };

const TextRotate = forwardRef<HTMLSpanElement, TextRotateProps>(
  ({ children, texts, dataTheme, className, ...props }, ref) => {
    const content = texts ? texts.map((text, index) => <span key={index}>{text}</span>) : children;

    return (
      <span {...props} ref={ref} data-theme={dataTheme} className={twMerge('text-rotate', className)}>
        <span>{content}</span>
      </span>
    );
  },
);

TextRotate.displayName = 'TextRotate';

export default TextRotate;
