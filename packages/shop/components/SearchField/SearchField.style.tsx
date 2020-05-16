import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const SearchWrapper = styled.div`
  width: 100%;
  height: 36px;
  display: flex;
  align-items: center;
  border: 1px solid #e6e6e6;
  border-radius: 6px;
  background-color: transparent;
`;

export const Icon = styled.span`
  width: 40px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${themeGet('colorsdarkRegular', '#77798C')};
  flex-shrink: 0;

  svg {
    width: 14px;
    height: auto;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  display: flex;
  border: 0;
  background-color: transparent;
  font-family: ${themeGet('fontFamily.0', 'sans-serif')};
  font-size: ${themeGet('fontSizes.2', '15')}px;
  font-weight: ${themeGet('fontWeights.3', '400')};
  color: ${themeGet('colors.darkBold', '#0D1136')};
  padding: 0;
  padding-right: 15px;
  outline: 0;
  box-shadow: none;
`;
