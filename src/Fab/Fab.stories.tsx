import type { Meta, StoryFn as Story } from '@storybook/react';

import Fab, { FabProps } from '.';

export default { title: 'Actions/Fab', component: Fab } as Meta;

export const SpeedDial: Story<FabProps> = (args) => (
  <Fab {...args} className="relative">
    <button className="btn btn-lg btn-circle btn-primary" aria-label="Open actions">
      +
    </button>
    <button className="btn btn-lg btn-circle" aria-label="Add">
      1
    </button>
    <button className="btn btn-lg btn-circle" aria-label="Edit">
      2
    </button>
    <button className="btn btn-lg btn-circle" aria-label="Share">
      3
    </button>
  </Fab>
);

SpeedDial.args = {};

export const Flower: Story<FabProps> = (args) => (
  <Fab {...args} flower className="relative">
    <button className="btn btn-lg btn-circle btn-primary" aria-label="Open actions">
      +
    </button>
    <button className="btn btn-lg btn-circle" aria-label="Add">
      1
    </button>
    <button className="btn btn-lg btn-circle" aria-label="Edit">
      2
    </button>
    <button className="btn btn-lg btn-circle" aria-label="Share">
      3
    </button>
  </Fab>
);
