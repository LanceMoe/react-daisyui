import type { Meta, StoryFn as Story } from '@storybook/react';

import type { TextRotateProps } from '.';
import TextRotate from '.';

export default { title: 'Data Display/Text Rotate', component: TextRotate } as Meta;

export const Default: Story<TextRotateProps> = (args) => (
  <TextRotate {...args} className="text-4xl font-bold text-primary">
    <span>DESIGN</span>
    <span>DEVELOP</span>
    <span>DEPLOY</span>
  </TextRotate>
);

Default.args = {};
