import React from 'react';

export type SelectOptionProps = React.OptionHTMLAttributes<HTMLOptionElement>;

function SelectOption({ children, ...props }: SelectOptionProps): React.JSX.Element {
  return <option {...props}>{children}</option>;
}

export default SelectOption;
