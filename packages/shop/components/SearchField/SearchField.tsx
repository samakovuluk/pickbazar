import React from 'react';
import { SearchIconSmall } from '../AllSvgIcon';
import { SearchWrapper, Icon, Input } from './SearchField.style';

type Props = {
  [x: string]: any;
  className?: any;
  icon?: any;
  name: any;
  placeholder?: any;
};
export default function SearchField({
  className,
  icon = <SearchIconSmall />,
  name,
  placeholder,
  ...props
}: Props) {
  const classes = `search-wrapper ${className}`;
  return (
    <SearchWrapper className={classes.trim()}>
      {icon && <Icon>{icon}</Icon>}
      <Input
        name={name}
        className="search-input"
        type="search"
        placeholder={placeholder}
        {...props}
      />
    </SearchWrapper>
  );
}
