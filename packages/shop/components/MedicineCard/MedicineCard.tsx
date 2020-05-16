import React from 'react';
import Image from 'components/Image/Image';
import Button from '../Button/Button';
import { PlusOutline } from '../AllSvgIcon';
import {
  CardWrapper,
  ImageWrapper,
  InfoWrapper,
  Title,
  Price,
  Unit,
  CartButton,
  Counter,
} from './MedicineCard.style';
import { useCart } from 'contexts/cart/use-cart';
// import { Counter } from 'components/Counter/Counter';

type ProductCardProps = {
  title: string;
  image: any;
  weight: string;
  currency?: string;
  description?: string;
  price: number;
  salePrice?: number;
  discountInPercent?: number;
  data?: any;
  onClick?: (e: any) => void;
  onChange?: (e: any) => void;
  increment?: (e: any) => void;
  decrement?: (e: any) => void;
  cartProducts?: any;
  addToCart?: any;
  updateCart?: any;
  value?: any;
  deviceType?: any;
};

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  image,
  weight,
  price,
  salePrice,
  discountInPercent,
  cartProducts,
  addToCart,
  updateCart,
  value,
  currency,
  onChange,
  increment,
  decrement,
  data,
  deviceType,
  onClick,
  ...props
}) => {
  const { addItem, removeItem, getItem, isInCart } = useCart();

  const handleAddClick = (e) => {
    e.stopPropagation();
    addItem(data);
  };

  const handleRemoveClick = (e) => {
    e.stopPropagation();
    removeItem(data);
  };
  // console.log(items, 'product-card');

  return (
    <CardWrapper onClick={onClick} className='medicine-card'>
      <ImageWrapper className={isInCart(data?.id) && 'overlay'}>
        <Image
          url={image}
          className='product-image'
          style={{ position: 'relative' }}
          alt={title}
        />

        {!isInCart(data?.id) ? (
          <CartButton
            iconPosition='left'
            colors='primary'
            size='small'
            variant='outlined'
            className='cart-button'
            icon={<PlusOutline />}
            onClick={handleAddClick}
          />
        ) : (
          <Counter
            value={getItem(data?.id).quantity}
            onDecrement={handleRemoveClick}
            onIncrement={handleAddClick}
          />
        )}
      </ImageWrapper>
      <InfoWrapper>
        <Price>
          {currency}
          {price}
        </Price>

        <Title>{title}</Title>
        <Unit>{weight}</Unit>
      </InfoWrapper>
    </CardWrapper>
  );
};

export default ProductCard;
