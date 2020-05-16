import React, { useState } from 'react';
import SwitchStyle from './Switch.style';

type SwitchProps = {
  disabled?: boolean;
  checked?: boolean;
  labelPosition?: 'left' | 'right' | 'top' | 'bottom';
  label?: string;
  className?: string;
  onUpdate: Function;
  style?: React.CSSProperties;
};

const Switch: React.SFC<SwitchProps> = ({
  label,
  disabled,
  className,
  labelPosition,
  onUpdate,
  checked,
  style,
}) => {
  // Switch State
  const [state, setState] = useState(false);

  // Add all classs to an array
  const addAllClasses: string[] = ['switch'];

  // Add label position class
  if (labelPosition) {
    addAllClasses.push(`label_${labelPosition}`);
  }

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  // OnChange Function
  const handleOnChange = () => {
    setState(!state);
    onUpdate(!state);
  };

  // Label Field
  const LabelField = label && <span className="field-label">{label}</span>;

  // Label Position
  const position = labelPosition || 'top';

  return (
    <SwitchStyle className={addAllClasses.join(' ')} style={style}>
      <label>
        {position === 'left' || position === 'right' || position === 'top'
          ? LabelField
          : ''}

        <input
          checked={checked ? !state : state}
          className="switch"
          type="checkbox"
          disabled={disabled}
          onChange={handleOnChange}
        />
        <div>
          <div />
        </div>
        {position === 'bottom' && LabelField}
      </label>
    </SwitchStyle>
  );
};

export default Switch;
