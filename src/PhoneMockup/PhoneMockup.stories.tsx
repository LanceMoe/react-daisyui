import type { Meta, StoryFn as Story } from '@storybook/react';
import React from 'react';

import { componentColors } from '../constants';
import type { PhoneMockupProps } from '.';
import PhoneMockup from '.';

const meta: Meta = {
  title: 'Mockup/PhoneMockup',
  component: PhoneMockup,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    color: {
      control: { type: 'select' },
      options: componentColors,
    },
  },
};

export default meta;

const Template: Story<PhoneMockupProps> = (args) => {
  return <PhoneMockup {...args}>Hi.</PhoneMockup>;
};

export const Default = Template.bind({});
Default.args = {};

export const ComponentColors = Template.bind({});
ComponentColors.args = { color: 'primary' };
