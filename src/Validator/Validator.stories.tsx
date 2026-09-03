import type { Meta, StoryFn as Story } from '@storybook/react';

import Validator, { ValidatorProps } from '.';

export default { title: 'Data Input/Validator', component: Validator } as Meta;

export const Default: Story<ValidatorProps> = (args) => (
  <Validator {...args} hint="Enter a valid email address." className="w-full max-w-xs">
    <input className="input" type="email" required placeholder="you@example.com" />
  </Validator>
);

Default.args = {};
