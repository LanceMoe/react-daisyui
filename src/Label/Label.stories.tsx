import type { Meta, StoryFn as Story } from '@storybook/react';

import Label, { LabelProps } from '.';

export default { title: 'Data Input/Label', component: Label } as Meta;

export const Default: Story<LabelProps> = (args) => (
  <Label {...args} htmlFor="label-example">
    Email address
    <input id="label-example" className="input" type="email" placeholder="you@example.com" />
  </Label>
);

Default.args = {};
