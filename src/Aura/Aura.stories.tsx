import type { Meta, StoryFn as Story } from '@storybook/react';

import Aura, { AuraProps } from '.';

export default { title: 'Data Display/Aura', component: Aura } as Meta;

export const Default: Story<AuraProps> = (args) => (
  <Aura {...args}>
    <div className="card w-64 bg-base-100 p-6 shadow-xl">
      <h2 className="card-title">Important card</h2>
      <p>Aura highlights a single important element.</p>
    </div>
  </Aura>
);

Default.args = { variant: 'glow', className: 'text-primary' };
