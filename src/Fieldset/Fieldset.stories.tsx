import type { Meta, StoryFn as Story } from '@storybook/react';

import Fieldset, { FieldsetProps } from '.';

export default { title: 'Data Input/Fieldset', component: Fieldset } as Meta;

export const Default: Story<FieldsetProps> = (args) => (
  <Fieldset {...args} legend="Contact details" description="We will never share your information.">
    <input className="input" placeholder="Email address" type="email" />
    <input className="input" placeholder="Phone number" type="tel" />
  </Fieldset>
);

Default.args = {};
