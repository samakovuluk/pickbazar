import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const CartPopupBody = styled.div`
  height: auto;
  width: 385px;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  background-color: #ffffff;
  box-sizing: content-box;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

const PopupHeader = styled.div`
  padding: 15px 25px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${themeGet('colors.borderColor', '#f1f1f1')};

  @media (max-width: 766px) {
    justify-content: center;
  }
`;

const PopupItemCount = styled.div`
  display: inline-flex;
  align-items: center;
  color: ${themeGet('colors.primary', '#009E7F')};

  span {
    font-family: 'Lato', sans-serif;
    font-size: ${themeGet('fontSizes.2', '15')}px;
    font-weight: ${themeGet('fontWeights.6', '700')};
    color: ${themeGet('colors.primary', '#009E7F')};
    padding-left: 10px;

    @media (max-width: 767px) {
      font-size: 12px;
    }
  }
`;

const CloseButton = styled.button`
  width: 14px;
  height: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 0;
  outline: 0;
  flex-shrink: 0;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.25);
  transition: all 0.4s ease;
  background-color: transparent;

  &:hover {
    color: #ea4d4a;
  }

  @media (max-width: 767px) {
    position: absolute;
    top: -45px;
    background-color: #fff;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    color: rgba(0, 0, 0, 0.5);
  }
`;

const ItemWrapper = styled.div`
  width: 100%;
  height: auto;
  /* max-height: 485px; */

  @media (max-width: 767px) {
    /* max-height: 300px; */
  }
`;

const ItemCards = styled.div`
  width: 100%;
  padding: 15px 25px;
  display: inline-flex;
  align-items: center;
  background-color: #ffffff;
  margin-bottom: 1px;
  box-sizing: border-box;
`;

const ItemImgWrapper = styled.div`
  width: 60px;
  height: 60px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-right: 15px;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ItemDetails = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: 100%;
`;

const ItemTitle = styled.span`
  font-family: 'Lato', sans-serif;
  font-size: ${themeGet('fontSizes.2', '15')}px;
  font-weight: ${themeGet('fontWeights.3', '400')};
  color: ${themeGet('colors.darkBold', '#0D1136')};
  margin-bottom: 10px;
`;

const ItemPrice = styled.span`
  font-family: 'Lato', sans-serif;
  font-size: ${themeGet('fontSizes.2', '15')}px;
  font-weight: ${themeGet('fontWeights.6', '700')};
  color: ${themeGet('colors.primary', '#009E7F')};
  margin-bottom: 10px;
`;

const ItemWeight = styled.span`
  font-family: 'Lato', sans-serif;
  font-size: ${themeGet('fontSizes.1', '13')}px;
  font-weight: ${themeGet('fontWeights.3', '400')};
  color: ${themeGet('colors.darkRegular', '#77798C')};
`;

const TotalPrice = styled.span`
  font-family: 'Lato', sans-serif;
  font-size: ${themeGet('fontSizes.2', '15')}px;
  font-weight: ${themeGet('fontWeights.6', '700')};
  color: ${themeGet('colors.darkBold', '#0D1136')};
  flex-shrink: 0;
  margin-left: auto;
`;

const DeleteButton = styled.button`
  width: 10px;
  height: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 0;
  outline: 0;
  margin-left: 15px;
  flex-shrink: 0;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.25);
  transition: all 0.4s ease;
  background-color: transparent;

  &:hover {
    color: #ea4d4a;
  }
`;

const PromoCode = styled.span`
  margin: 20px 0;
  display: flex;
  justify-content: center;

  > button {
    border: 0;
    outline: 0;
    box-shadow: none;
    background-color: transparent;
    display: inline-flex;
    cursor: pointer;
    font-family: 'Lato', sans-serif;
    font-size: ${themeGet('fontSizes.2', '15')}px;
    font-weight: ${themeGet('fontWeights.6', '700')};
    color: ${themeGet('colors.primary', '#009E7F')};
    transition: color 0.35s ease;
    &:hover {
      color: ${themeGet('colors.primaryHover', '#008466')};
    }
  }
`;

const CheckoutButton = styled.button`
  height: 48px;
  width: calc(100% - 30px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${themeGet('colors.primary', '#009E7F')};
  padding: 0;
  border-radius: 48px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  border: 0;
  outline: 0;
  cursor: pointer;
  /* margin-top: auto; */
  margin-bottom: 15px;
  margin-left: 15px;

  @media (max-width: 767px) {
    height: 45px;
  }

  > a {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 30px;
  }
`;

const CheckoutButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: auto;
`;

const Title = styled.a`
  font-family: 'Lato', sans-serif;
  font-size: ${themeGet('fontSizes.2', '15')}px;
  font-weight: ${themeGet('fontWeights.6', '700')};
  color: #ffffff;
  padding-left: 5px;
  padding-right: 10px;
`;

const PriceBox = styled.span`
  width: auto;
  height: 44px;
  padding: 0 30px;
  overflow: hidden;
  border-radius: 28px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  font-family: 'Lato', sans-serif;
  font-size: ${themeGet('fontSizes.2', '15')}px;
  font-weight: ${themeGet('fontWeights.6', '700')};
  color: ${themeGet('colors.primary', '#009E7F')};
  margin-right: 2px;

  @media (max-width: 767px) {
    height: 41px;
  }
`;

const NoProductMsg = styled.span`
  font-family: 'Lato', sans-serif;
  font-size: ${themeGet('fontSizes.2', '14')}px;
  font-weight: ${themeGet('fontWeights.6', '700')};
  color: ${themeGet('colors.darkRegular', '#77798C')};
  display: block;
  width: 100%;
  padding: 40px 0;
  text-align: center;
`;

const CouponBoxWrapper = styled.div`
  width: 100%;
  padding: 0 15px;
  flex-direction: column;
  padding-right: 22px;
`;

const CouponCode = styled.p`
  font-family: 'Lato', sans-serif;
  font-size: 15px;
  font-weight: 500;
  color: ${themeGet('colors.darkRegular', '#77798C')};

  width: 100%;
  display: flex;
  justify-content: center;

  span {
    font-weight: ${themeGet('fontWeights.6', '700')};
    color: ${themeGet('colors.primary', '#009E7F')};
    margin-left: 5px;
  }
`;

const ErrorMsg = styled.span`
  font-family: 'Lato', sans-serif;
  font-size: ${themeGet('fontSizes.2', '14')}px;
  font-weight: 400;
  color: ${themeGet('colors.secondaryHover', '#FF282F')};
  padding-top: 10px;
  display: flex;
  justify-content: center;
`;

const CartSlidePopup = styled.div`
  width: 420px;
  height: 100vh;
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  right: -450px;
  z-index: 1010;
  box-shadow: 0 21px 36px rgba(0, 0, 0, 0.16);
  transition: all 0.35s ease-in-out;

  @media (max-width: 430px) {
    width: 100%;
  }

  &.cartPopupFixed {
    right: 0;
  }

  ${CartPopupBody} {
    height: 100%;
    width: 100%;
  }

  ${ItemWrapper} {
    /* height: calc(100vh - 240px); */
    max-height: calc(100vh - 245px);
    background-color: #ffffff;
  }

  ${ItemCards} {
    border-bottom: 1px solid #f7f7f7;
    margin-bottom: 0;
  }

  @media (max-width: 767px) {
    ${PopupHeader} {
      justify-content: space-between;
    }

    ${CloseButton} {
      top: auto;
      position: relative;
      background-color: transparent;
    }
  }
`;

export {
  CartSlidePopup,
  CartPopupBody,
  PopupHeader,
  PopupItemCount,
  PromoCode,
  CloseButton,
  ItemCards,
  ItemImgWrapper,
  ItemDetails,
  ItemTitle,
  ItemPrice,
  ItemWeight,
  TotalPrice,
  DeleteButton,
  CheckoutButton,
  CheckoutButtonWrapper,
  Title,
  PriceBox,
  NoProductMsg,
  ItemWrapper,
  CouponBoxWrapper,
  CouponCode,
  ErrorMsg,
};
