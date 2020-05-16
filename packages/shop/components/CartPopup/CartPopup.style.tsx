import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const CartPopupButtonStyled = styled('button')`
  height: 60px;
  width: auto;
  display: inline-flex;
  align-items: center;
  background-color: ${themeGet('colors.primary', '#009E7F')};
  padding: 0;
  padding-left: 30px;
  border-radius: 60px;
  box-shadow: 0 21px 36px rgba(0, 0, 0, 0.16);
  border: 0;
  outline: 0;
  cursor: pointer;
  position: fixed;
  bottom: 50px;
  right: 50px;
  z-index: 99;

  @media (max-width: 767px) {
    width: calc(100% - 60px);
    height: 45px;
    padding: 2px 2px 2px 30px;
    bottom: 30px;
    right: 30px;
  }
`;

const ButtonImgBox = styled('span')`
  color: #ffffff;
`;

const ItemCount = styled('span')`
  font-family: 'Lato', sans-serif;
  font-size: 12px;
  font-weight: 700;
  color: #ffffff;
  padding-left: 5px;
  padding-right: 10px;
`;

const PriceBox = styled('span')`
  width: 56px;
  height: 56px;
  overflow: hidden;
  border-radius: 28px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  font-family: 'Lato', sans-serif;
  font-size: 12px;
  font-weight: 700;
  color: ${themeGet('colors.primary', '#009E7F')};
  margin-right: 2px;

  @media (max-width: 767px) {
    width: 90px;
    height: 100%;
    height: 41px;
    margin-left: auto;
    margin-right: 0;
  }
`;

const CartPopupBoxButton = styled('button')`
  height: auto;
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${themeGet('colors.primary', '#009E7F')};
  padding: 0;
  border-radius: 6px 0 0 6px;
  box-shadow: 0 21px 36px rgba(0, 0, 0, 0.16);
  border: 0;
  outline: 0;
  cursor: pointer;
  position: fixed;
  right: 0;
  top: 50%;
  margin-top: -46px;
  z-index: 99;
`;

const TotalItems = styled('span')`
  font-family: 'Lato', sans-serif;
  font-size: 13px;
  font-weight: 700;
  color: #ffffff;
  padding-left: 5px;
  padding-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 10px;

  svg {
    margin-right: 10px;
  }
`;

const PriceBoxAlt = styled('span')`
  width: auto;
  height: 35px;
  min-width: 80px;
  overflow: hidden;
  border-radius: 6px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  font-family: 'Lato', sans-serif;
  font-size: 13px;
  font-weight: 700;
  color: ${themeGet('colors.primary', '#009E7F')};
  margin: 0 10px 10px;
`;

export {
  ButtonImgBox,
  CartPopupButtonStyled,
  ItemCount,
  PriceBox,
  CartPopupBoxButton,
  PriceBoxAlt,
  TotalItems,
};
