import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const Text = styled.span`
  font-family: 'Lato', sans-serif;
  font-size: ${themeGet('fontSizes.2', '15')}px;
  font-weight: ${themeGet('fontWeights.3', '400')};
  color: ${themeGet('colors.labelColor', '#909090')};
  margin-top: 15px;
  text-align: center;
`;

export const TextHighlighted = styled.span`
  color: ${themeGet('colors.primary', '#009e7f')};
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 30px;
  border: 2px dashed ${themeGet('colors.borderColor', '#f1f1f1')};
  background-color: #ffffff;
  color: #bdbdbd;
  outline: none;
  cursor: pointer;
`;

export const ThumbsContainer = styled.aside`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 16px;
`;

export const Thumb = styled.div`
  border: 1px solid ${themeGet('colors.borderColor', '#f1f1f1')};
  display: inline-flex;
  border-radius: 2px;
  margin-bottom: 8px;
  margin-right: 8px;
  width: 100px;
  height: 100px;
  padding: 4px;
  box-sizing: border-box;
`;

export const ThumbInner = styled.div`
  display: flex;
  min-width: 0;
  overflow: hidden;
`;

export const Img = styled.img`
  display: block;
  width: auto;
  height: 100%;
`;
