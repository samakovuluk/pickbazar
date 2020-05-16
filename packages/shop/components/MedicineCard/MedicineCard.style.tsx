import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import Button from '../Button/Button';
import { Counter as Counters } from 'components/Counter/Counter';

export const CardWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  font-family: 'Lato', sans-serif;
  display: flex;
  flex-direction: column;
`;

export const ImageWrapper = styled.div`
  width: auto;
  height: auto;
  position: relative;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  background-color: #ffffff;

  img {
    max-width: 100%;
    max-height: 100%;
    display: inline-block;
  }

  &.overlay {
    &:after {
      content: '';
      width: 100%;
      height: 100%;
      display: inline-block;
      position: absolute;
      top: 0;
      left: 0;
      background-color: rgba(255, 255, 255, 0.75);
    }
  }
`;

export const InfoWrapper = styled.div`
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: auto;
`;

export const Title = styled.h3`
  font-family: 'Lato', sans-serif;
  font-size: ${themeGet('fontSizes.2', '15')}px;
  font-weight: ${themeGet('fontWeights.3', '400')};
  /* color: ${themeGet('colors.darkBold', '#0D1136')}; */
  color: ${themeGet('colors.darkRegular', '#77798c')};
  margin: 0 0 4px 0;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: 767px) {
    font-size: 14px;
    margin: 0 0 5px 0;
  }
`;

export const Unit = styled.span`
  font-family: 'Lato', sans-serif;
  font-size: ${themeGet('fontSizes.1', '13')}px;
  font-weight: ${themeGet('fontWeights.3', '400')};
  color: ${themeGet('colors.darkRegular', '#77798c')};

  @media (max-width: 767px) {
    font-size: 12px;
  }
`;

export const Price = styled.span`
  font-family: 'Lato', sans-serif;
  font-size: ${themeGet('fontSizes.2', '15')}px;
  font-weight: ${themeGet('fontWeights.6', '700')};
  color: ${themeGet('colors.darkBold', '#0D1136')};
  margin-bottom: 10px;

  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

export const CartButton = styled(Button)`
  background-color: ${themeGet('colors.primary', '#009E7F')};
  border: 0;
  color: #ffffff;
  border-radius: 18px;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  padding-left: 0;
  padding-right: 0;
  font-size: ${themeGet('fontSizes.1', '13')}px;
  font-weight: ${themeGet('fontWeights.6', '700')};
  position: absolute;
  bottom: 20px;
  right: 15px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.3);
  z-index: 1;

  @media (max-width: 767px) {
    width: 32px;
    height: 32px;
    padding: 0;
    border-radius: 50%;
  }
  .btn-text {
    padding: 0 0 0 6px;
    @media (max-width: 767px) {
      display: none;
    }
  }
  &:hover {
    background-color: ${themeGet('colors.primary', '#009E7F')};
  }
  svg {
    fill: currentColor;
  }
`;

export const Counter = styled(Counters)`
  position: absolute;
  width: calc(100% - 60px);
  height: 36px;
  bottom: 30px;
  left: 30px;
  z-index: 1;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
`;

// @media (max-width: 767px) {
//   .quantity {
//     width: 32px;
//     height: 90px;
//     display: block;
//     flex-shrink: 0;
//     position: absolute;
//     bottom: 15px;
//     right: 15px;
//     z-index: 1;
//     box-shadow: 0 10px 20px rgba(0, 0, 0, 0.16);
//   }
//   button {
//     width: 100%;
//     height: 27px;
//   }
//   .incBtn {
//     top: 0;
//     justify-content: center;
//   }
//   .decBtn {
//     top: auto;
//     bottom: 0;
//     justify-content: center;
//   }
//   input[type='number'] {
//     left: 0;
//     color: #222222;
//     font-size: 14px;
//     height: calc(100% - 54px);
//     position: absolute;
//     top: 27px;
//     width: 100%;
//     color: #fff;
//   }
// }
