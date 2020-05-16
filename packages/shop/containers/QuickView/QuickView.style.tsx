import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const QuickViewWrapper = styled.div`
  max-width: 1020px;
`;

export const ProductDetailsWrapper = styled.div`
  background-color: #fff;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  min-height: 100%;
  border-radius: 6px;
  overflow: hidden;
  box-sizing: border-box;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.16);
  * {
    box-sizing: border-box;
  }
`;

export const ProductPreview = styled.div`
  flex: 0 0 50%;
  max-width: 50%;
  padding: 30px 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: 767px) {
    flex: 0 0 100%;
    max-width: 100%;
    padding: 30px 47px 40px 30px;
    order: 0;
  }

  img {
    width: 100%;

    @media (max-width: 767px) {
      min-width: auto !important;
    }
  }
`;

export const SaleTag = styled.span`
  font-size: 12px;
  font-weight: 700;
  color: #ffffff;
  background-color: ${themeGet('colors.yellow', '#FBB979')};
  padding: 0 10px;
  line-height: 24px;
  border-radius: 12px;
  display: inline-block;
  position: absolute;
  top: 40px;
  right: 30px;
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
  top: 30px;
  right: 30px;
  border-radius: 12px;
  -webkit-transform: translate3d(0, 0, 1px);
  transform: translate3d(0, 0, 1px);
`;

export const ProductInfoWrapper = styled.div`
  flex: 0 0 50%;
  max-width: 50%;
  border-left: 1px solid ${themeGet('colors.lightMediumColor', '#f3f3f3')};

  @media (max-width: 767px) {
    flex: 0 0 100%;
    max-width: 100%;
    padding: 10px 0 30px;
    order: 1;
  }
`;

export const ProductInfo = styled.div`
  padding: 50px;

  @media (max-width: 767px) {
    padding: 0px 30px 30px 30px;
  }
`;

export const ProductTitlePriceWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 10px;
`;

export const ProductTitle = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: ${themeGet('fontSizes.4', '21')}px;
  font-weight: ${themeGet('fontWeights.6', '700')};
  color: ${themeGet('colors.darkBold', '#0D1136')};
  line-height: 1.5;
  display: flex;

  @media (max-width: 767px) {
    word-break: break-word;
  }
`;

export const ProductPriceWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  margin-left: 25px;
  line-height: 31px;

  @media (max-width: 767px) {
    margin-left: 15px;
  }
`;

export const ProductPrice = styled.div`
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  font-weight: ${themeGet('fontWeights.6', '700')};
  color: ${themeGet('colors.primary', '#009E7F')};
`;

export const SalePrice = styled.span`
  font-family: 'Lato', sans-serif;
  font-size: ${themeGet('fontSizes.1', '13')}px;
  font-weight: ${themeGet('fontWeights.3', '400')};
  color: ${themeGet('colors.yellow', '#FBB979')};
  font-style: italic;
  padding: 0 5px;
  overflow: hidden;
  position: relative;
  margin-right: 10px;

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

export const ProductWeight = styled.div`
  font-family: 'Lato', sans-serif;
  font-size: ${themeGet('fontSizes.1', '13')}px;
  font-weight: ${themeGet('fontWeights.3', '400')};
  color: ${themeGet('colors.darkRegular', '#77798c')};
`;

export const ProductDescription = styled.p`
  font-family: 'Lato', sans-serif;
  font-size: ${themeGet('fontSizes.2', '15')}px;
  font-weight: ${themeGet('fontWeights.3', '400')};
  color: ${themeGet('colors.darkMedium', '#424561')};
  line-height: 2;
  margin-top: 30px;
`;

export const ProductCartBtn = styled.div`
  margin-top: 60px;

  @media (max-width: 767px) {
    margin-top: 40px;
  }

  .reusecore__button {
    font-family: 'Lato', sans-serif;
    font-size: ${themeGet('fontSizes.2', '15')}px;
    font-weight: ${themeGet('fontWeights.6', '700')};
    color: ${themeGet('colors.primary', '#009E7F')};
    height: 36px;
    border-radius: 4rem;

    .btn-icon {
      margin-right: 5px;
    }

    &:hover {
      color: #fff;
      background-color: ${themeGet('colors.primary', '#009E7F')};
      border-color: ${themeGet('colors.primary', '#009E7F')};
    }
  }
`;

export const ProductCartWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductMeta = styled.div`
  margin-top: 30px;
`;

export const MetaSingle = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const MetaItem = styled.span`
  font-family: 'Lato', sans-serif;
  font-size: ${themeGet('fontSizes.1', '13')}px;
  font-weight: ${themeGet('fontWeights.6', '700')};
  color: ${themeGet('colors.darkBold', '#0D1136')};
  margin-right: 10px;
  margin-bottom: 10px;
  background-color: ${themeGet('colors.lightColor', '#f7f7f7')};
  padding: 0 15px;
  border-radius: 6px;
  cursor: pointer;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalClose = styled.button`
  position: fixed;
  top: 20px;
  right: 15px;
  padding: 10px 15px;
  z-index: 1;

  cursor: pointer;
  display: block;
  color: rgba(0, 0, 0, 0.5);
  background: transparent;
  border: 0;
  outline: none;
  display: inline-block;
  svg {
    width: 12px;
    height: 12px;
  }
  @media (max-width: 767px) {
    top: 5px;
    right: 0;
  }
`;
