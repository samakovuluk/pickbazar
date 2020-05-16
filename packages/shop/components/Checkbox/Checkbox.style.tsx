import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const CheckBoxStyle = styled.div`
  display: inline-flex;
  /* Switch label default style */
  .pickbazar__field-label {
    color: ${themeGet('colorsdarkRegular', '#77798C')};
    font-size: ${themeGet('fontSizes.2', '14')}px;
    font-weight: 400;
  }

  /* Switch label style when labelPosition on left */
  &.label_left {
    label {
      display: flex;
      align-items: center;
      .pickbazar__field-label {
        margin-right: 10px;
      }
    }
  }

  /* Switch label style when labelPosition on right */
  &.label_right {
    label {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;

      .pickbazar__field-label {
        margin-left: 10px;
      }
    }
  }

  /* Checkbox default style */
  input[type='checkbox'] {
    &.checkbox {
      opacity: 0;
      position: absolute;
      margin: 0;
      z-index: -1;
      width: 0;
      height: 0;
      overflow: hidden;
      pointer-events: none;

      &:checked + div {
        border-color: ${themeGet('colorsdarkRegular', '#77798C')};
        background-color: #ffffff;
        &::after {
          opacity: 1;
          visibility: visible;
          transform: rotate(45deg) scale(1);
        }
      }
    }
    + div {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 14px;
      height: 14px;
      border-radius: 6px;
      border: 1px solid ${themeGet('colorsdarkRegular', '#77798C')};
      position: relative;
      transition: all 0.3s ease;
      &::after {
        content: '';
        width: 2px;
        height: 6px;
        transform: rotate(45deg) scale(0.8);
        border-bottom: 2px solid ${themeGet('colorsdarkRegular', '#77798C')};
        border-right: 2px solid ${themeGet('colorsdarkRegular', '#77798C')};
        position: absolute;
        top: 1px;
        opacity: 0;
        visibility: hidden;
        transition-property: opacity, visibility;
        transition-duration: 0.3s;
      }
    }
  }
`;

CheckBoxStyle.displayName = 'CheckBoxStyle';

export default CheckBoxStyle;
