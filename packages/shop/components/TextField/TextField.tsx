import React from 'react';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
const FieldWrapper = styled.div`
  textarea {
    height: auto;
    min-height: 171px;
    padding-top: 15px;
    resize: none;
  }
`;

const InputFeedback = styled.span`
  font-family: ${themeGet('fontFamily.0', 'sans-serif')};
  font-size: ${themeGet('fontSizes.1', '13')}px;
  font-weight: ${themeGet('fontWeights.3', '400')};
  color: ${themeGet('colors.secondaryHover', '#FF282F')};
  padding-top: 10px;
  display: flex;
  justify-content: flex-end;
`;
const Input = styled.input`
  width: 100%;
  height: 54px;
  border-radius: 6px;
  font-family: ${themeGet('colors.fontFamily.0', 'Lato, sans-serif')};
  border: 1px solid ${themeGet('colors.borderColor', '#e6e6e6')};
  color: ${themeGet('colors.darkBold', '#0D1136')};
  font-size: ${themeGet('fontSizes.2', '15')}px;
  font-weight: ${themeGet('fontWeights.3', '400')};
  line-height: 19px;
  padding: 0 18px;
  box-sizing: border-box;
  transition: border-color 0.25s ease;

  &:hover,
  &:focus {
    outline: 0;
  }

  &:focus {
    border-color: ${themeGet('colors.primary', '#009e7f')};
  }

  &::placeholder {
    color: ${themeGet('colorsdarkRegular', '#77798C')};
  }
`;

type Props = {
  type;
  id;
  label;
  error;
  value;
  onChange;
  className;
};
const TextField: React.FC<Props & any> = ({
  type,
  id,
  label,
  error,
  value,
  onChange,
  className,
  ...props
}) => {
  return (
    <FieldWrapper>
      {label && (
        <label className='label' htmlFor={id}>
          {label}
        </label>
      )}

      <Input id={id} type={type} value={value} onChange={onChange} {...props} />
      {error && <InputFeedback>{error}</InputFeedback>}
    </FieldWrapper>
  );
};

export default TextField;
