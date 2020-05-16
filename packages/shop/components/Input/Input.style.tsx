import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const InputWrapper = styled.div`
  > div {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;

    > label {
      font-family: 'Lato', sans-serif;
      font-size: ${themeGet('fontSizes.2', '15')}px;
      font-weight: ${themeGet('fontWeights.6', '700')};
      color: ${themeGet('colors.darkBold', '#0D1136')};
      line-height: 19px;
    }
  }

  .inner-wrap {
    width: 100%;
    margin-top: 15px;
    box-sizing: border-box;
    position: relative;

    &:only-child {
      margin: 0;
    }

    input,
    textarea,
    input[type='text'],
    input[type='email'],
    input[type='number'],
    input[type='password'] {
      width: 100%;
      height: 48px;
      border-radius: 6px;
      font-family: 'Lato', sans-serif;
      font-size: ${themeGet('fontSizes.2', '15')}px;
      font-weight: ${themeGet('fontWeights.3', '400')};
      border: 1px solid ${themeGet('colors.borderColor', '#f1f1f1')};
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
    }

    input[type='number'] {
      &::-webkit-inner-spin-button,
      &::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }

    textarea {
      height: auto;
      min-height: 171px;
      padding-top: 15px;
      resize: none;
    }
  }

  &.send-verification {
    input[type='number'] {
      padding-right: 141px;
    }
  }

  &.number-verified {
    input[type='number'] {
      padding-right: 95px;
    }
  }

  &.disabled {
    .inner-wrap {
      cursor: not-allowed;
      opacity: 0.6;
    }
  }

  &.with-search-icon {
    .inner-wrap {
      position: relative;

      .search-icon {
        width: 45px;
        height: 100%;
        font-size: 15px;
        color: ${themeGet('colorsdarkRegular', '#77798C')};
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        left: 0;

        &.right {
          right: 0;
          left: auto;
        }
      }

      .icon-left {
        padding-left: 45px;
      }

      .icon-right {
        padding-right: 45px;
      }
    }
  }
`;

export const VerifiedLabel = styled.span`
  border-radius: 6px;
  height: 23px;
  min-width: 61px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${themeGet('colors.primary', '#009e7f')};
  font-size: 12px;
  font-weight: 400;
  text-transform: capitalize;
  background-color: rgba(0, 158, 127, 0.15);
  position: absolute;
  top: calc(50% - 23px / 2);
  right: 18px;
`;

export const VerificationButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  height: 23px;
  min-width: 109px;
  color: rgba(250, 69, 49, 0.85);
  background-color: rgba(250, 69, 49, 0.15);
  font-size: 12px;
  font-weight: 400;
  border: 0;
  padding-left: 10px;
  padding-right: 10px;
  box-sizing: border-box;
  text-transform: capitalize;
  cursor: pointer;
  position: absolute;
  top: calc(50% - 23px / 2);
  right: 18px;
  transition: all 0.3s ease;

  &:hover,
  &:focus {
    outline: 0;
    opacity: 0.8;
  }
`;

export default InputWrapper;
