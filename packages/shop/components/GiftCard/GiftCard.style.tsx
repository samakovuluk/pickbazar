import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const GiftCardWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  font-family: 'Lato', sans-serif;
  display: flex;
  flex-direction: column;
`;

export const GiftCardImageWrapper = styled.div`
  width: 100%;
  height: auto;
  min-height: 160px;
  max-height: 240px;
  position: relative;
  text-align: center;
  border-radius: 6px;
  overflow: hidden;
  background-color: ${themeGet('colors.borderColor', '#f1f1f1')};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 767px) {
    height: auto;
    max-height: 220px;
  }

  @media (max-width: 490px) {
    max-height: none;
  }
`;

export const CardInfo = styled.div`
  padding: 0px 15px;
`;

export const CardContent = styled.div`
  background-color: #ffffff;
  overflow: hidden;
  border: 1px solid ${themeGet('colors.borderColor', '#f1f1f1')};
  border-top: 0;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
`;

export const GiftCode = styled.input`
  font-family: 'Lato', sans-serif;
  font-size: ${themeGet('fontSizes.2', '15')}px;
  font-weight: ${themeGet('fontWeights.3', '400')};
  color: ${themeGet('colors.darkBold', '#0D1136')};
  margin: 0;
  border: 0;
  outline: 0;
  padding: 0;
  width: 100%;

  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

export const CopyButton = styled.button`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: 0;
  outline: 0;
  box-shadow: none;
  font-family: 'Lato', sans-serif;
  font-size: ${themeGet('fontSizes.2', '15')}px;
  font-weight: ${themeGet('fontWeights.6', '700')};
  color: ${themeGet('colors.primary', '#009E7F')};
  padding: 0;
  cursor: pointer;
  flex-shrink: 0;
  line-height: 18px;
  white-space: nowrap;

  @media (max-width: 767px) {
    font-size: 12px;
  }
`;

export const CopySuccess = styled.span`
  font-family: 'Lato', sans-serif;
  font-size: ${themeGet('fontSizes.1', '13')}px;
  font-weight: ${themeGet('fontWeights.3', '400')};
  color: ${themeGet('colors.primary', '#009E7F')};
  line-height: 18px;
  white-space: nowrap;
`;
