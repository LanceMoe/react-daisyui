import type { Meta, StoryFn as Story } from '@storybook/react';
import React from 'react';

import type { TextareaProps } from '.';
import Textarea from '.';

export default {
  title: 'Data Input/Textarea',
  component: Textarea,
  args: {
    placeholder: 'Bio',
    disabled: false,
  },
} as Meta;

export const Default: Story<TextareaProps> = (args) => {
  return (
    <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
      <Textarea {...args} />
    </div>
  );
};

export const FormControlAndLabels: Story<TextareaProps> = (args) => {
  return (
    <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
      <div className="flex flex-col gap-2">
        <label className="label">
          <span>Your bio</span>
          <span className="text-xs text-base-content/60">Alt label</span>
        </label>
        <Textarea {...args} />
        <label className="label">
          <span className="text-xs text-base-content/60">Your bio</span>
          <span className="text-xs text-base-content/60">Alt label</span>
        </label>
      </div>
    </div>
  );
};
