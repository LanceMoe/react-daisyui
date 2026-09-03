import React from 'react';
import { twMerge } from 'tailwind-merge';

import { IComponentBaseProps } from '../types';

export type ChatBubbleFooterProps = React.ComponentPropsWithoutRef<'div'> & IComponentBaseProps;

const ChatBubbleFooter = React.forwardRef<HTMLDivElement, ChatBubbleFooterProps>(
  ({ dataTheme, className, ...props }, ref) => (
    <div {...props} data-theme={dataTheme} className={twMerge('chat-footer opacity-50', className)} ref={ref} />
  ),
);

export default ChatBubbleFooter;
