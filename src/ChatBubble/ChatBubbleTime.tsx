import React from 'react';
import { twMerge } from 'tailwind-merge';

import type { IComponentBaseProps } from '../types';

export type ChatBubbleTimeProps = React.ComponentPropsWithoutRef<'time'> & IComponentBaseProps;

const ChatBubbleTime = React.forwardRef<HTMLTimeElement, ChatBubbleTimeProps>(
  ({ dataTheme, className, ...props }, ref) => (
    <time {...props} data-theme={dataTheme} className={twMerge('text-xs opacity-50', className)} ref={ref} />
  ),
);

export default ChatBubbleTime;
