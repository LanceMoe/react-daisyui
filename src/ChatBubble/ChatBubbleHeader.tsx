import React from 'react';
import { twMerge } from 'tailwind-merge';

import { IComponentBaseProps } from '../types';

export type ChatBubbleHeaderProps = React.ComponentPropsWithoutRef<'div'> & IComponentBaseProps;

const ChatBubbleHeader = React.forwardRef<HTMLDivElement, ChatBubbleHeaderProps>(
  ({ dataTheme, className, ...props }, ref) => (
    <div {...props} data-theme={dataTheme} className={twMerge('chat-header', className)} ref={ref} />
  ),
);

export default ChatBubbleHeader;
