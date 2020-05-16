export interface Product {
  id: number;
  title: string;
  weight: string;
  author: string;
  description: string;
  price: number;
  category: string;
  inStock?: number;
  image: string;
  quantity: number;
}

export interface CartProduct extends Product {
  quantity: number;
}

export interface RadioDataType {
  id: number;
  title: string;
  value: string;
  label: string;
  disabled?: boolean;
}

export interface CardType {
  id: number;
  type: string;
  cardNumber: string;
  cardName: string;
  disabled?: boolean;
}

export interface PaymentOptionType {
  showCard?: boolean;
  addedCard?: CardType[];
  mobileWallet?: boolean;
  cashOnDelivery?: boolean;
}

export interface Progress {
  checked?: boolean;
  title: string;
  subtitle?: string;
}
