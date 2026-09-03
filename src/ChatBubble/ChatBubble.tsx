import React, { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import type { IComponentBaseProps } from '../types';
import ChatBubbleAvatar from './ChatBubbleAvatar';
import ChatBubbleFooter from './ChatBubbleFooter';
import ChatBubbleHeader from './ChatBubbleHeader';
import ChatBubbleMessage from './ChatBubbleMessage';
import ChatBubbleTime from './ChatBubbleTime';

export type ChatBubbleProps = React.ComponentPropsWithoutRef<'div'> &
  IComponentBaseProps & {
    end?: boolean;
  };

const ChatBubble = forwardRef<HTMLDivElement, ChatBubbleProps>(
  ({ end = false, dataTheme, className, children, ...props }, ref): React.JSX.Element => (
    <div
      {...props}
      data-theme={dataTheme}
      className={twMerge('chat', `chat-${end ? 'end' : 'start'}`, className)}
      ref={ref}
    >
      {children}
    </div>
  ),
);

ChatBubble.displayName = 'ChatBubble';

export default Object.assign(ChatBubble, {
  Header: ChatBubbleHeader,
  Time: ChatBubbleTime,
  Avatar: ChatBubbleAvatar,
  Message: ChatBubbleMessage,
  Footer: ChatBubbleFooter,
});
