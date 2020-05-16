import Currency from 'currency.js';
import { getCookie } from './session';
import { getLocalState } from './localStorage';
import {
  CartProduct,
  CardType,
  RadioDataType,
  PaymentOptionType,
} from '../interfaces';

export const getCartProducts = () => {
  const products = getLocalState('cart');
  return products ? products : [];
};

export const getTotalPrice = () => {
  const price = getLocalState('totalPrice');
  return price ? price : 0;
};

export const getCoupon = () => {
  const coupon = getLocalState('coupon');

  if (coupon) return coupon;

  return {
    id: 0,
    code: 'DEFAULT_COUPON',
    discountInPercent: 0,
  };
};
export const getDiscount = () => {
  const discount = getLocalState('discount');
  return discount ? discount : 0;
};
export const getSubTotalPrice = () => {
  const price = getLocalState('subTotalPrice');
  return price ? price : 0;
};
// export const getCartProducts = (context: any) => {
//   try {
//     const products = JSON.parse(getCookie('cart', context));
//     if (products && products.length) {
//       return products;
//     } else {
//       return [];
//     }
//   } catch (error) {
//     return 0;
//   }
// };

// export const getTotalPrice = (context: any) => {
//   try {
//     const price = JSON.parse(getCookie('totalPrice', context));
//     return price;
//   } catch (error) {
//     return 0;
//   }
// };

// export const getSubTotalPrice = (context: any) => {
//   try {
//     const price = JSON.parse(getCookie('subTotalPrice', context));
//     return price;
//   } catch (error) {
//     return 0;
//   }
// };

// export const getDiscount = (context: any) => {
//   try {
//     const discount = getCookie('discount', context);
//     return discount || 0;
//   } catch (error) {
//     return 0;
//   }
// };

// export const getCoupon = (context: any) => {
//   try {
//     const coupon = JSON.parse(getCookie('coupon', context));
//     return coupon;
//   } catch (error) {
//     return {
//       id: 0,
//       code: 'DEFAULT_COUPON',
//       discountInPercent: 0,
//     };
//   }
// };

export const findProductIndex = (
  cartProducts: CartProduct[],
  dataId: number
): number => {
  let index = -1;
  if (cartProducts && cartProducts.length) {
    index = cartProducts.findIndex((product) => product.id === dataId);
  }
  return index;
};

export const getProductQuantity = (
  cartProducts: CartProduct[],
  index: number
): number => {
  let quantity = 0;
  if (index !== -1) {
    quantity = cartProducts[index].quantity;
  }
  return quantity;
};

export const calculateItemPrice = (product: CartProduct): number => {
  const quantity = product.quantity ? product.quantity : 1;
  const price = product.salePrice ? product.salePrice : product.price;
  const itemPrice = Currency(quantity).multiply(price);
  const itemPriceValue: number = Number(itemPrice.value);
  return itemPriceValue;
};

export const calculateTotalPrice = (products: CartProduct[]): number => {
  let total = Currency(0);
  products.forEach((product) => {
    const quantity = product.quantity ? product.quantity : 1;
    const price = product.salePrice ? product.salePrice : product.price;
    const itemPrice = Currency(quantity).multiply(price);
    total = Currency(total).add(itemPrice);
  });
  const totalPrice: number = Number(total.value);
  return totalPrice;
};

export const modifyaddressData = (data: any, disabled = false) => {
  let radioData: RadioDataType[] = [];
  data.forEach((item: any) => {
    radioData.push({
      id: item.id,
      title: item.name,
      value: `${item.name}-${item.id}`,
      label: item.info,
      disabled,
    });
  });
  return radioData;
};

export const modifyContactData = (data: any, disabled = false) => {
  let radioData: RadioDataType[] = [];
  data.forEach((item: any) => {
    radioData.push({
      id: item.id,
      title: item.type === 'primary' ? 'Primary' : 'Secondary',
      value: `${item.number}-${item.id}`,
      label: item.number,
      disabled,
    });
  });
  return radioData;
};

export const modifyCardData = (
  data: any,
  disabled = false,
  mobileWallet = true,
  cashOnDelivery = true
) => {
  let cardData: CardType[] = [];
  data.forEach((item: any) => {
    cardData.push({
      id: item.id,
      type: item.type,
      cardNumber: item.lastFourDigit,
      cardName: item.name,
      disabled,
    });
  });
  const paymentOptionData: PaymentOptionType = {
    showCard: true,
    mobileWallet: mobileWallet,
    cashOnDelivery: cashOnDelivery,
    addedCard: cardData,
  };
  return paymentOptionData;
};
