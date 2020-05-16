import React, { useState, useCallback } from 'react';
import CheckBoxStyle from './Checkbox.style';

const useToggle = initialValue => {
  const [value, setValue] = useState(initialValue);
  const toggler = useCallback(() => setValue(value => !value), []);
  return [value, toggler];
};

type CheckBoxProps = {
  id?: any;
  disabled?: boolean;
  isChecked?: boolean;
  labelText?: string;
  className?: string;
  htmlFor?: any;
  value?: any;
  style?: React.CSSProperties;
  labelPosition?: 'left' | 'right';
};

const CheckBox: React.FC<CheckBoxProps> = ({
  className,
  isChecked = false,
  labelText,
  style,
  value,
  id,
  htmlFor,
  labelPosition = 'right',
  disabled = false,
  ...props
}) => {
  // use toggle hooks
  const [toggleValue, toggleHandler] = useToggle(isChecked);

  // Add all classs to an array
  const addAllClasses = ['pickbazar__checkbox'];

  // Add label position class
  if (labelPosition) {
    addAllClasses.push(`label_${labelPosition}`);
  }

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  // label control
  const LabelField = labelText && (
    <span className="pickbazar__field-label">{labelText}</span>
  );

  const position = labelPosition || 'right';

  return (
    <CheckBoxStyle className={addAllClasses.join(' ')} {...props} style={style}>
      <label htmlFor={htmlFor}>
        {position === 'left' || position === 'right' ? LabelField : ''}
        <input
          type="checkbox"
          className="checkbox"
          id={id}
          value={value}
          checked={toggleValue}
          onChange={toggleHandler}
          disabled={disabled}
          {...props}
        />
        <div />
      </label>
    </CheckBoxStyle>
  );
};

export default CheckBox;
