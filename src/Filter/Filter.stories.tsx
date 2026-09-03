import type { Meta, StoryFn as Story } from '@storybook/react';

import Filter, { FilterProps } from '.';

export default { title: 'Actions/Filter', component: Filter } as Meta;

export const Default: Story<FilterProps> = (args) => (
  <Filter {...args} reset name="filter-example">
    <input className="btn" type="radio" name="filter-example" aria-label="All" />
    <input className="btn" type="radio" name="filter-example" aria-label="Design" />
    <input className="btn" type="radio" name="filter-example" aria-label="Development" />
  </Filter>
);

Default.args = {};
