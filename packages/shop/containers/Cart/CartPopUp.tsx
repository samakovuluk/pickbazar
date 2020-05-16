import React, { useContext } from 'react';
import { createGlobalStyle } from 'styled-components';
import { openModal, closeModal } from '@redq/reuse-modal';
import CartItem from './Cart';
import CartPopupButton, {
  BoxedCartButton,
} from 'components/CartPopup/CartPopupButton';
import { CURRENCY } from 'helper/constant';
import { CartSlidePopup } from './CartItemCard.style';
import { FormattedMessage } from 'react-intl';
import { useCart } from 'contexts/cart/use-cart';

const CartPopupStyle = createGlobalStyle`
  .cartPopup{
    top: auto !important;
    left: auto !important;
    bottom: 50px !important;
    right: 50px !important;
    box-shadow: 0 21px 36px rgba(0, 0, 0, 0.16);
    transform-origin: bottom right;

    @media (max-width: 767px) {
      max-width: none!important;
      width: 100% !important;
      bottom: 0 !important;
      left: 0!important;
      background: #fff;
      overflow: initial !important;
      transform-origin: bottom center;
    }
  }
`;

type CartProps = {
  deviceType: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
};

const CartPopUp: React.FC<CartProps> = ({
  deviceType: { mobile, tablet, desktop },
}) => {
  const { isOpen, cartItemsCount, toggleCart, calculatePrice } = useCart();

  const handleModal = () => {
    openModal({
      show: true,
      config: {
        className: 'cartPopup',
        width: 'auto',
        height: 'auto',
        enableResizing: false,
        disableDragging: true,
        transition: {
          tension: 360,
          friction: 40,
        },
      },
      closeOnClickOutside: true,
      component: CartItem,
      closeComponent: () => <div />,
      componentProps: { onCloseBtnClick: closeModal, scrollbarHeight: 370 },
    });
  };

  let cartSliderClass = isOpen === true ? 'cartPopupFixed' : '';

  return (
    <>
      {mobile || tablet ? (
        <>
          <CartPopupStyle />
          <CartPopupButton
            className='product-cart'
            itemCount={cartItemsCount}
            itemPostfix={
              cartItemsCount > 1 ? (
                <FormattedMessage id='cartItems' defaultMessage='items' />
              ) : (
                <FormattedMessage id='cartItem' defaultMessage='item' />
              )
            }
            price={calculatePrice()}
            pricePrefix='$'
            onClick={handleModal}
          />
        </>
      ) : (
        <>
          <CartSlidePopup className={cartSliderClass}>
            {isOpen && (
              <CartItem onCloseBtnClick={toggleCart} scrollbarHeight='100vh' />
            )}
          </CartSlidePopup>

          <BoxedCartButton
            className='product-cart'
            itemCount={cartItemsCount}
            itemPostfix={
              cartItemsCount > 1 ? (
                <FormattedMessage id='cartItems' defaultMessage='items' />
              ) : (
                <FormattedMessage id='cartItem' defaultMessage='item' />
              )
            }
            price={calculatePrice()}
            pricePrefix={CURRENCY}
            onClick={toggleCart}
          />
        </>
      )}
    </>
  );
};

export default CartPopUp;
