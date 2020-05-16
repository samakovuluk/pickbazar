import React from 'react';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { CloseIcon, PencilIcon } from '../AllSvgIcon';

const CardWrapper = styled.label`
  display: inline-flex;
  align-items: center;
  /* justify-content: center; */
  border-radius: 6px;
  background-color: ${themeGet('colors.lightColor', '#F7F7F7')};
  border: 1px solid ${themeGet('colors.lightColor', '#F7F7F7')};
  text-align: center;
  padding: 15px 20px;
  margin-bottom: 15px;
  margin-right: 15px;
  position: relative;
  font-family: 'Lato', sans-serif;
  font-size: ${themeGet('fontSizes.2', '15')}px;
  font-weight: ${themeGet('fontWeights.3', '400')};
  color: ${themeGet('colors.darkBold', '#0D1136')};
  line-height: 24px;
  max-width: 240px;
  cursor: pointer;
  width: 100%;
  transition: all 0.25s ease;

  &.active {
    border: 1px solid ${themeGet('colors.primary', '#009E7F')};
    background-color: #ffffff;
  }

  &.disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  &.item-has-title {
    flex-direction: column;
    text-align: left;
    align-items: flex-start;
    padding: 15px;
  }

  &:last-child {
    margin-right: 0;
  }

  input[type='radio'] {
    opacity: 0;
    visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
  }

  &:hover {
    .button-wrapper {
      opacity: 1;
      visibility: visible;
    }
  }
`;
const CardTitle = styled.span`
  font-family: 'Lato', sans-serif;
  font-size: ${themeGet('fontSizes.1', '13')}px;
  font-weight: ${themeGet('fontWeights.6', '700')};
  color: ${themeGet('colors.darkBold', '#0D1136')};
  line-height: 1.2;
  margin-bottom: 5px;
  text-transform: capitalize;
`;
const CardContent = styled.span`
  font-family: 'Lato', sans-serif;
  font-size: ${themeGet('fontSizes.2', '15')}px;
  font-weight: ${themeGet('fontWeights.3', '400')};
  color: ${themeGet('colors.darkMedium', '#424561')};
`;
const CardButtons = styled.span`
  display: block;
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  opacity: 0;
  visibility: hidden;
  transition: 0.2s ease-in-out;
`;
const ActionButton = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  overflow: hidden;
  margin-left: 5px;
  cursor: pointer;
  outline: 0;
  padding: 0;
  color: #fff;

  &.edit-btn {
    background-color: ${themeGet('colors.primary', '#009E7F')};
  }
  &.delete-btn {
    background-color: ${themeGet('colors.secondary', '#ff5b60')};
  }

  svg {
    display: block;
    width: 8px;
    height: auto;
  }
`;
type RadioCardProps = {
  id: string;
  name: string;
  title: string;
  content: string;
  editIcon?: any;
  deleteIcon?: any;
  withActionButtons?: boolean;
  onEdit?: () => void;
  onDelete?: () => void;
  hasEdit?: boolean;
  hasDelete?: boolean;
  disabled?: boolean;
  checked?: boolean;
  onChange: () => void;
};
const RadioCard: React.FC<RadioCardProps> = ({
  id,
  name,
  title,
  content,
  editIcon,
  deleteIcon,
  withActionButtons,
  onEdit,
  onDelete,
  hasEdit,
  hasDelete,
  disabled,
  checked,
  onChange,
}) => {
  return (
    <CardWrapper
      htmlFor={`${name}-${id}`}
      className={`label ${title ? 'item-has-title' : 'no_title'}
      ${checked ? 'active' : 'not_active'}`}
    >
      <input
        type='radio'
        id={`${name}-${id}`}
        name={name}
        value={content}
        disabled={disabled}
        checked={checked}
        onChange={onChange}
      />
      {title && <CardTitle>{title}</CardTitle>}
      {content && <CardContent>{content}</CardContent>}
      {withActionButtons && (
        <CardButtons className='button-wrapper'>
          {hasEdit && (
            <ActionButton onClick={onEdit} className='edit-btn'>
              {editIcon}
            </ActionButton>
          )}
          {hasDelete && (
            <ActionButton onClick={onDelete} className='delete-btn'>
              {deleteIcon}
            </ActionButton>
          )}
        </CardButtons>
      )}
    </CardWrapper>
  );
};
RadioCard.defaultProps = {
  title: '',
  content: '',
  editIcon: <PencilIcon />,
  deleteIcon: <CloseIcon />,
  withActionButtons: true,
  hasEdit: true,
  hasDelete: true,
};
export default RadioCard;
