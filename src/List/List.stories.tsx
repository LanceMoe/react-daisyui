import type { Meta, StoryFn as Story } from '@storybook/react';

import type { ListProps } from '.';
import List from '.';

export default { title: 'Data Display/List', component: List } as Meta;

export const Default: Story<ListProps> = (args) => (
  <List {...args} className="w-full max-w-md">
    <List.Row>
      <div className="text-2xl">📦</div>
      <div>
        <div className="font-semibold">Package delivered</div>
        <div className="text-sm text-base-content/60">Today at 10:30</div>
      </div>
      <button className="btn btn-square btn-ghost" aria-label="Open package">
        →
      </button>
    </List.Row>
    <List.Row>
      <div className="text-2xl">✉️</div>
      <div>
        <div className="font-semibold">New message</div>
        <div className="text-sm text-base-content/60">Yesterday</div>
      </div>
      <button className="btn btn-square btn-ghost" aria-label="Open message">
        →
      </button>
    </List.Row>
  </List>
);

Default.args = {};
