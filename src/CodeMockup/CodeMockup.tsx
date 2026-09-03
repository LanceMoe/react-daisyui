import React, { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import { IComponentBaseProps } from '../types';
import { CodeMockupLine, CodeMockupLineProps } from './CodeMockupLine';

export type CodeMockupProps = React.ComponentPropsWithoutRef<'div'> & IComponentBaseProps;

const CodeMockup = forwardRef<HTMLDivElement, CodeMockupProps>(
  ({ dataTheme, className, children, ...props }, ref): React.JSX.Element => {
    const classes = twMerge('mockup-code', className);

    return (
      <div aria-label="Code mockup" {...props} data-theme={dataTheme} className={classes} ref={ref}>
        {React.Children.map(children, (child, index) => {
          if (!React.isValidElement<CodeMockupLineProps>(child)) {
            return child;
          }
          return React.cloneElement(child, { key: child.key ?? index });
        })}
      </div>
    );
  },
);

CodeMockup.displayName = 'CodeMockup';
const CodeMockupNamespace = Object.assign(CodeMockup, { Line: CodeMockupLine });

export { CodeMockupNamespace as CodeMockup };
