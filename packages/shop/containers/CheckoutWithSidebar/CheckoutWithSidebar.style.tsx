import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import Inputs from 'components/Input/Input';

const CheckoutWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 130px 60px 60px;
  position: relative;

  @media (max-width: 1100px) {
    padding-left: 0;
    padding-right: 0;
  }

  @media (max-width: 990px) {
    padding-top: 60px;
  }
`;

export const CheckoutContainer = styled.div`
  width: 100%;
  display: flex;
  counter-reset: section-counter;

  @media (min-width: 990px) {
    width: 970px;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const CheckoutInformation = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  padding: 20px;

  @media (max-width: 990px) {
    margin-right: 10px;
  }
`;

export const Heading = styled.h3`
  font-family: 'Lato', sans-serif;
  font-size: 21px;
  font-weight: ${themeGet('fontWeights.3', '400')};
  color: ${themeGet('colors.darkBold', '#0D1136')};
  line-height: 1.4;
  margin-bottom: 35px;
  position: relative;
  width: calc(100% - 100px);
  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    font-size: 19px;
  }
`;

export const InformationBox = styled.div`
  background-color: #ffffff;
  padding: 30px;
  padding-bottom: 20px;
  position: relative;
  margin-bottom: 20px;
  box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.08);

  @media (max-width: 767px) {
    padding: 20px;
  }

  &.paymentBox {
    .reusecore__button {
      @media (max-width: 600px) {
        padding-right: 0;
      }
    }
  }

  ${Heading} {
    :before {
      counter-increment: section-counter;
      content: counter(section-counter);
      font-family: 'Lato', sans-serif;
      font-size: 16px;
      font-weight: ${themeGet('fontWeights.3', '400')};
      color: #ffffff;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${themeGet('colors.primary', '#009E7F')};
      margin-right: 15px;

      @media (max-width: 600px) {
        width: 30px;
        height: 30px;
        font-size: 14px;
      }
    }
  }
`;

export const TotalProduct = styled.div`
  flex-grow: 1;
  text-align: right;
  padding-right: 60px;
`;

export const TotalPrice = styled.div`
  flex-grow: 1;
  text-align: left;
  padding-left: 60px;
`;

export const DeliverySchedule = styled.div`
  .radioGroup {
    justify-content: space-between;
    > label {
      margin-right: 0;
      flex: calc(33.3333333333% - 10px);
      max-width: calc(33.3333333333% - 10px);
      padding: 11px 15px;

      @media (max-width: 900px) and (min-width: 768px) {
        flex: calc(50% - 10px);
        max-width: calc(50% - 10px);
      }

      @media (max-width: 480px) {
        flex: 100%;
        max-width: 100%;
        margin-right: 0;
      }
    }
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;

  .radioGroup {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;

    label {
      margin-top: 0;
      width: calc(33.333333333% - 10px);
      max-width: calc(33.333333333% - 10px);
      margin-bottom: 15px;

      &:nth-child(3n) {
        margin-right: 0;
      }

      @media (max-width: 900px) and (min-width: 768px) {
        flex: calc(50% - 10px);
        max-width: calc(50% - 10px);

        &:nth-child(3n) {
          margin-right: 15px;
        }

        &:nth-child(2n) {
          margin-right: 0;
        }
      }

      @media (max-width: 480px) {
        flex: 100%;
        max-width: 100%;
        margin-right: 0;

        &:nth-child(3n) {
          margin-right: 0;
        }

        &:nth-child(2n) {
          margin-right: 0;
        }
      }
    }
  }

  .reusecore__button {
    width: auto;
    height: auto;
    display: flex;
    align-items: center;
    background-color: transparent;
    border: 0;
    outline: 0;
    border-radius: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
    font-size: 14px;
    font-weight: ${themeGet('fontWeights.6', '700')};
    color: ${themeGet('colors.primary', '#009E7F')};
    position: absolute;
    top: 40px;
    right: 30px;

    @media (max-width: 600px) {
      top: 27px;
      right: 20px;
    }
  }
`;

export const CheckoutSubmit = styled.div`
  margin-top: 25px;
  .reusecore__button {
    width: 100%;
  }
`;

export const InfoText = styled.span`
  font-family: 'Lato', sans-serif;
  font-size: ${themeGet('fontSizes.2', '15')}px;
  font-weight: ${themeGet('fontWeights.3', '400')};
  color: ${themeGet('colors.darkBold', '#0D1136')};
  margin-bottom: 15px;
  margin-top: 15px;
`;

export const CouponBoxWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-top: 50px;

  .couponCodeText {
    margin-right: auto;
  }
`;

export const CouponCode = styled.p`
  font-family: 'Lato', sans-serif;
  font-size: 14px;
  font-weight: ${themeGet('fontWeights.3', '400')};
  color: ${themeGet('colors.darkRegular', '#77798C')};
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: baseline;

  span {
    font-weight: ${themeGet('fontWeights.6', '700')};
    color: ${themeGet('colors.primary', '#009E7F')};
    margin-left: 10px;
  }
`;

export const RemoveCoupon = styled.button`
  font-family: 'Lato', sans-serif;
  font-size: 12px;
  font-weight: ${themeGet('fontWeights.3', '400')};
  color: ${themeGet('colors.secondary', '#ff5b60')};
  width: auto;
  height: auto;
  display: inline-block;
  border: 0;
  outline: 0;
  box-shadow: none;
  background-color: transparent;
  padding: 0;
  cursor: pointer;
  margin-left: 5px;
`;

export const CouponInputBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    .reusecore__button {
      padding-right: 30px !important;
      flex-shrink: 0;
    }
  }
`;

export const Input = styled(Inputs)`
  width: 50%;
  margin-right: 20px;
  input {
    border: 1px solid ${themeGet('colors.lightDarkColor', '#e6e6e6')} !important;
    background-color: ${themeGet('colors.lightColor', '#f7f7f7')};
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const HaveCoupon = styled.button`
  font-family: 'Lato', sans-serif;
  font-size: ${themeGet('fontSizes.2', '15')}px;
  font-weight: ${themeGet('fontWeights.3', '400')};
  color: ${themeGet('colors.primary', '#009E7F')};
  width: auto;
  height: auto;
  display: inline-block;
  border: 0;
  outline: 0;
  box-shadow: none;
  background-color: transparent;
  padding: 0;
  cursor: pointer;
`;

export const ErrorMsg = styled('span')`
  font-family: 'Lato', sans-serif;
  font-size: 12px;
  font-weight: ${themeGet('fontWeights.3', '400')};
  color: ${themeGet('colors.secondaryHover', '#FF282F')};
  padding-top: 10px;
  display: flex;
  margin-left: 20px;
`;

export const TermConditionText = styled.span`
  font-family: 'Lato', sans-serif;
  font-size: 13px;
  font-weight: ${themeGet('fontWeights.3', '400')};
  color: ${themeGet('colors.darkRegular', '#77798C')};
  line-height: 1.5;
  margin-top: 30px;
  display: block;
`;

export const TermConditionLink = styled.span`
  font-family: 'Lato', sans-serif;
  font-size: 13px;
  font-weight: ${themeGet('fontWeights.3', '400')};
  color: ${themeGet('colors.secondary', '#ff5b60')};
  margin-left: 5px;
  cursor: pointer;
  line-height: 1.5;
`;

export const CartWrapper = styled.div`
  width: 270px;
  flex-shrink: 0;
  padding-top: 20px;

  @media (min-width: 768px) and (max-width: 1200px) {
    width: 260px;
  }

  @media (max-width: 767px) {
    width: 100%;
    padding-left: 15px;
    padding-right: 15px;
  }
`;

export const OrderInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) and (max-width: 990px) {
    padding-right: 15px;
  }
`;

export const Title = styled.h3`
  font-family: 'Lato', sans-serif;
  font-size: ${themeGet('fontSizes.2', '15')}px;
  font-weight: ${themeGet('fontWeights.6', '700')};
  color: ${themeGet('colors.darkBold', '#0D1136')};
  text-align: center;
  margin-bottom: 40px;
`;

export const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 15px;
`;

export const CalculationWrapper = styled.div`
  border-top: 1px solid ${themeGet('colors.lightDarkColor', '#e6e6e6')};
  padding: 20px 15px 0;
  margin-top: 20px;
`;

export const Items = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 25px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Quantity = styled.span`
  font-family: 'Lato', sans-serif;
  font-size: 14px;
  font-weight: ${themeGet('fontWeights.6', '700')};
  color: ${themeGet('colors.darkBold', '#0D1136')};
`;

export const Multiplier = styled.span`
  font-family: 'Lato', sans-serif;
  font-size: 14px;
  font-weight: ${themeGet('fontWeights.3', '400')};
  color: ${themeGet('colors.darkRegular', '#77798C')};
  margin: 0 12px;
`;

export const ItemInfo = styled.span`
  font-family: 'Lato', sans-serif;
  font-size: 14px;
  font-weight: ${themeGet('fontWeights.3', '400')};
  color: ${themeGet('colors.darkRegular', '#77798C')};
  margin-right: 15px;
`;

export const Price = styled.span`
  font-family: 'Lato', sans-serif;
  font-size: 14px;
  font-weight: ${themeGet('fontWeights.3', '400')};
  color: ${themeGet('colors.darkRegular', '#77798C')};
  margin-left: auto;
`;

export const TextWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const Text = styled.span`
  font-family: 'Lato', sans-serif;
  font-size: 14px;
  font-weight: ${themeGet('fontWeights.3', '400')};
  color: ${themeGet('colors.darkRegular', '#77798C')};
`;

export const Bold = styled.span`
  font-family: 'Lato', sans-serif;
  font-size: 14px;
  font-weight: ${themeGet('fontWeights.6', '700')};
  color: ${themeGet('colors.darkBold', '#0D1136')};
`;

export const Small = styled.span`
  font-family: 'Lato', sans-serif;
  font-size: 11px;
`;

export const NoProductMsg = styled.h3`
  font-family: 'Lato', sans-serif;
  font-size: 14px;
  font-weight: ${themeGet('fontWeights.3', '400')};
  color: ${themeGet('colors.darkRegular', '#77798C')};
  line-height: 1.2;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
  align-items: center;
`;

export default CheckoutWrapper;
