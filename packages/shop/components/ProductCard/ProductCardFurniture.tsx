import React from 'react';
import Image from 'components/Image/Image';
import {
  BookCardWrapper,
  BookImageWrapper,
  BookInfo,
  ProductName,
  DiscountPercent,
  ProductCardWrapper,
  ProductImageWrapper,
  ProductInfo,
  SaleTag,
} from './ProductCard.style';

type ProductCardProps = {
  title: string;
  image: any;
  discountInPercent?: number;
  onClick?: (e: any) => void;
};

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  image,
  discountInPercent,
  onClick,
}) => {
  return (
    <ProductCardWrapper onClick={onClick} className='furniture-card'>
      <ProductImageWrapper>
        <Image
          url={image}
          className='product-image'
          style={{ position: 'relative' }}
          alt={title}
        />
        {discountInPercent ? (
          <>
            <DiscountPercent>{discountInPercent}%</DiscountPercent>
          </>
        ) : (
          ''
        )}
      </ProductImageWrapper>
      <ProductInfo>
        <ProductName>{title}</ProductName>
      </ProductInfo>
    </ProductCardWrapper>
  );
};

export default ProductCard;
