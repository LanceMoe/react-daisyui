import type { Meta, StoryFn as Story } from '@storybook/react';
import React from 'react';

import type { DetailsProps } from '.';
import Collapse from '.';

export default {
  title: 'Data Display/Collapse/Details',
  component: Collapse.Details,
} as Meta;

export const Default: Story<DetailsProps> = (args) => {
  return (
    <Collapse.Details {...args}>
      <Collapse.Details.Title className="text-xl font-medium">Click to open/close</Collapse.Details.Title>
      <Collapse.Content>
        <p>content</p>
      </Collapse.Content>
    </Collapse.Details>
  );
};
Default.args = {
  className: 'bg-base-200',
};
