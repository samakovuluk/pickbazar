import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const ProductCardWrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: #fff;
  position: relative;
  font-family: 'Lato', sans-serif;
  border-radius: 6px;
  cursor: pointer;
`;

export const ProductImageWrapper = styled.div`
  height: 240px;
  padding: 5px;
  position: relative;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    max-height: 100%;
    display: inline-block;
  }

  @media (max-width: 767px) {
    height: 145px;
  }
`;

export const SaleTag = styled.span`
  font-family: 'Lato', sans-serif;
  font-size: ${themeGet('fontSizes.1', '13')}px;
  font-weight: ${themeGet('fontWeights.6', '700')};
  color: #ffffff;
  background-color: ${themeGet('colors.yellow', '#FBB979')};
  padding: 0 10px;
  line-height: 24px;
  border-radius: 12px;
  display: inline-block;
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const DiscountPercent = styled.span`
  font-family: 'Lato', sans-serif;
  font-size: ${themeGet('fontSizes.1', '13')}px;
  font-weight: ${themeGet('fontWeights.6', '700')};
  color: #ffffff;
  line-height: 24px;
  background-color: ${themeGet('colors.yellow', '#FBB979')};
  padding-left: 10px;
  padding-right: 10px;
  position: relative;
  display: inline-block;
  position: absolute;
  top: 15px;
  right: 15px;
  border-radius: 12px;
`;

export const ProductInfo = styled.div`
         padding: 20px 25px 30px;

         @media (max-width: 767px) {
           padding: 15px 20px;
           min-height: 123px;
         }

         .product-title {
           font-family: 'Lato', sans-serif;
           font-size: ${themeGet('fontSizes.2', '15')}px;
           font-weight: ${themeGet('fontWeights.6', '700')};
           color: ${themeGet('colors.darkBold', '#0D1136')};
           margin: 0 0 7px 0;
           width: 100%;
           overflow: hidden;
           text-overflow: ellipsis;
           white-space: nowrap;

           @media (max-width: 767px) {
             font-size: 14px;
             margin: 0 0 5px 0;
           }
         }

         .product-weight {
           font-family: 'Lato', sans-serif;
           font-size: ${themeGet('fontSizes.1', '13')}px;
           font-weight: ${themeGet('fontWeights.3', '400')};
           color: ${themeGet('colors.darkRegular', '#77798c')};

           @media (max-width: 767px) {
             font-size: 12px;
           }
         }

         .product-meta {
           margin-top: 30px;
           display: flex;
           align-items: center;
           justify-content: space-between;
           @media (max-width: 767px) {
             min-height: 32px;
           }

           .productPriceWrapper {
             position: relative;
             display: flex;
             flex-direction: column;
             align-items: flex-start;

             .product-price {
               font-family: 'Lato', sans-serif;
               font-size: ${themeGet('fontSizes.2', '15')}px;
               font-weight: ${themeGet('fontWeights.6', '700')};
               color: ${themeGet('colors.primary', '#009E7F')};

               @media (max-width: 767px) {
                 font-size: 14px;
               }
             }

             .discountedPrice {
               font-family: 'Lato', sans-serif;
               font-size: ${themeGet('fontSizes.1', '13')}px;
               font-weight: ${themeGet('fontWeights.3', '400')};
               color: ${themeGet('colors.yellow', '#FBB979')};
               font-style: italic;
               padding: 0 5px;
               position: relative;
               overflow: hidden;
               position: absolute;
               top: -20px;
               left: -4px;

               &:before {
                 content: '';
                 width: 100%;
                 height: 1px;
                 display: inline-block;
                 background-color: ${themeGet('colors.yellow', '#FBB979')};
                 position: absolute;
                 top: 50%;
                 left: 0;
               }
             }
           }

           .cart-button {
             border: 2px solid #f7f7f7;
             border-radius: 18px;
             height: 36px;
             padding-left: 17px;
             padding-right: 17px;
             font-size: ${themeGet('fontSizes.1', '13')}px;
             font-weight: ${themeGet('fontWeights.6', '700')};
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
               color: #fff;
               background-color: #009e7f;
               border-color: #009e7f;
             }
             svg {
               fill: currentColor;
             }
           }
           @media (max-width: 767px) {
             .quantity {
               width: 32px;
               height: 90px;
               display: block;
               flex-shrink: 0;
               position: absolute;
               bottom: 15px;
               right: 15px;
               z-index: 1;
               box-shadow: 0 10px 20px rgba(0, 0, 0, 0.16);
             }
             button {
               width: 100%;
               height: 27px;
             }
             .incBtn {
               top: 0;
               justify-content: center;
             }
             .decBtn {
               top: auto;
               bottom: 0;
               justify-content: center;
             }
             input[type='number'] {
               left: 0;
               color: #222222;
               font-size: 14px;
               height: calc(100% - 54px);
               position: absolute;
               top: 27px;
               width: 100%;
               color: #fff;
             }
           }
         }
       `;

export const BookImageWrapper = styled.div`
  height: 275px;
  padding: 0;
  position: relative;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;

  img {
    max-width: 100%;
    max-height: 100%;
    display: inline-block;
  }

  @media (max-width: 767px) {
    height: 215px;
  }

  ${DiscountPercent} {
    top: 0;
    right: 0;
  }
`;

export const BookInfo = styled.div`
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 767px) {
    padding: 15px 0px 0px;
  }
`;

export const ProductName = styled.span`
  font-family: 'Lato', sans-serif;
  font-size: ${themeGet('fontSizes.2', '15')}px;
  font-weight: ${themeGet('fontWeights.6', '700')};
  color: ${themeGet('colors.darkBold', '#0D1136')};
  margin: 0 0 7px 0;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
  display: block;

  &:only-child {
    margin: 0;
  }

  @media (max-width: 767px) {
    font-size: 14px;
    margin: 0 0 5px 0;
  }
`;

export const AuthorInfo = styled.span`
  font-family: 'Lato', sans-serif;
  font-size: ${themeGet('fontSizes.1', '13')}px;
  font-weight: ${themeGet('fontWeights.3', '400')};
  color: ${themeGet('colors.darkRegular', '#77798c')};

  @media (max-width: 767px) {
    font-size: ${themeGet('fontSizes.1', '13')}px;
  }
`;

export const AddCartBox = styled.div`
  width: calc(100% - 40px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 6px;
  background-color: #ffffff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.16);
  position: absolute;
  top: 50%;
  left: 50%;
  opacity: 0;
  transition: all 0.3s;

  .cart-button {
    border-radius: 18px;
    height: 36px;
    padding-left: 17px;
    padding-right: 17px;
    font-size: ${themeGet('fontSizes.1', '13')} px;
    font-weight: ${themeGet('fontWeights.6', '700')};
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
      color: #fff;
      background-color: #009e7f;
      border-color: #009e7f;
    }
    svg {
      fill: currentColor;
    }
  }
`;

export const PriceWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 15px;
`;

export const Price = styled.span`
  font-family: 'Lato', sans-serif;
  font-size: ${themeGet('fontSizes.2', '15')} px;
  font-weight: ${themeGet('fontWeights.6', '700')};
  color: ${themeGet('colors.primary', '#009E7F')};

  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

export const DiscountedPrice = styled.span`
  font-family: 'Lato', sans-serif;
  font-size: ${themeGet('fontSizes.1', '13')} px;
  font-weight: ${themeGet('fontWeights.3', '400')};
  color: ${themeGet('colors.yellow', '#FBB979')};
  font-style: italic;
  padding: 0 5px;
  position: relative;
  overflow: hidden;
  margin-bottom: 5px;
  margin-left: -4px;

  &:before {
    content: '';
    width: 100%;
    height: 1px;
    display: inline-block;
    background-color: ${themeGet('colors.yellow', '#FBB979')};
    position: absolute;
    top: 50%;
    left: 0;
  }
`;

export const BookCardWrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 30px;
  background-color: #fff;
  position: relative;
  font-family: 'Lato', sans-serif;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    ${AddCartBox} {
      opacity: 1;
    }
  }

  @media (max-width: 767px) {
    padding: 15px;
  }
`;
