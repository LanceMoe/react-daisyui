import type { Meta, StoryFn as Story } from '@storybook/react';

import type { CalendarProps } from '.';
import Calendar from '.';

export default { title: 'Data Input/Calendar', component: Calendar } as Meta;

export const Cally: Story<CalendarProps> = (args) => (
  <Calendar {...args} className="max-w-md rounded-box border border-base-300 p-4">
    <p className="text-sm text-base-content/60">Calendar library styles are ready for Cally.</p>
  </Calendar>
);

Cally.args = { library: 'cally' };

export const ReactDayPicker: Story<CalendarProps> = (args) => (
  <Calendar {...args} className="max-w-md rounded-box border border-base-300 p-4">
    <p className="text-sm text-base-content/60">Use this class on a React Day Picker instance.</p>
  </Calendar>
);

ReactDayPicker.args = { library: 'react-day-picker' };
