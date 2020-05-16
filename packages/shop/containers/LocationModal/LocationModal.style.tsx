import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import Buttons from 'components/Button/Button';

export const Wrapper = styled.div`
  text-align: center;
  background-color: #fff;
`;
export const Container = styled.div`
  padding: 60px 60px 45px;

  @media (max-width: 768px) {
    padding: 40px 30px;
  }
`;

export const LogoWrapper = styled.div`
  margin-bottom: 30px;

  img {
    max-width: 160px;
  }
`;
export const Heading = styled.h3`
  color: ${themeGet('colors.primary', '#009E7F')};
  margin-bottom: 10px;
  font-family: 'Poppins', sans-serif;
  font-size: ${themeGet('fontSizes.4', '21')}px;
  font-weight: ${themeGet('fontWeights.6', '700')};
`;

export const SubHeading = styled.span`
  margin-bottom: 30px;
  font-family: 'Lato', sans-serif;
  font-size: ${themeGet('fontSizes.2', '15')}px;
  font-weight: ${themeGet('fontWeights.3', '400')};
  color: ${themeGet('colors.darkRegular', '#77798c')};
  display: block;
  line-height: 1.5;
`;
export const OfferSection = styled.div`
  padding: 20px;
  background-color: ${themeGet('colors.lightColor', '#F7F7F7')};
  color: ${themeGet('colors.primary', '#009E7F')};
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Offer = styled.p`
  font-family: 'Lato', sans-serif;
  font-size: ${themeGet('fontSizes.2', '15')}px;
  font-weight: ${themeGet('fontWeights.3', '400')};
  color: ${themeGet('colors.darkRegular', '#77798c')};
  margin: 0;
  margin-left: 10px;
`;
export const Input = styled.input`
  width: 100%;
  height: 48px;
  border-radius: 6px;
  background-color: ${themeGet('colors.lightColor', '#F7F7F7')};
  border: 1px solid ${themeGet('colors.lightColor', '#F7F7F7')};
  font-family: 'Lato', sans-serif;
  font-size: ${themeGet('fontSizes.2', '15')}px;
  font-weight: ${themeGet('fontWeights.3', '400')};
  color: ${themeGet('colors.darkBold', '#0D1136')};
  line-height: 19px;
  padding: 0 18px;
  box-sizing: border-box;
  transition: border-color 0.25s ease;
  margin-bottom: 20px;
  text-align: center;

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

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &.disabled {
    .inner-wrap {
      cursor: not-allowed;
      opacity: 0.6;
    }
  }
`;

export const Button = styled(Buttons)`
  border-radius: 6px;
`;
