import type { Meta, StoryFn as Story } from '@storybook/react';
import React from 'react';

import type { InputProps } from '.';
import Input from '.';

export default {
  title: 'Data Input/Input',
  component: Input,
  args: {
    placeholder: 'Type here',
    className: 'w-full max-w-xs',
    disabled: false,
  },
} as Meta;

export const Default: Story<InputProps> = (args) => {
  return (
    <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
      <Input {...args} />
    </div>
  );
};

export const FormControlAndLabels: Story<InputProps> = (args) => {
  return (
    <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
      <div className="flex w-full max-w-xs flex-col gap-2">
        <label className="label">
          <span>What is your name?</span>
          <span className="text-xs text-base-content/60">Alt label</span>
        </label>
        <Input {...args} />
        <label className="label">
          <span className="text-xs text-base-content/60">Alt label</span>
          <span className="text-xs text-base-content/60">Alt label</span>
        </label>
      </div>
    </div>
  );
};
