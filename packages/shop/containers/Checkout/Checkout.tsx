import React, { useContext, useState, useEffect } from 'react';
import Router from 'next/router';
import Button from 'components/Button/Button';
import RadioCard from 'components/RadioCard/RadioCard';
import RadioGroup from 'components/RadioGroup/RadioGroup';
import PaymentGroup from 'components/PaymentGroup/PaymentGroup';
import Loader from 'components/Loader/Loader';
import UpdateAddress from './Update/UpdateAddress';
import UpdateContact from './Update/UpdateContact';
import StripePaymentForm from '../Payment/StripePaymentForm';
import { DELETE_ADDRESS } from 'graphql/mutation/address';
import { DELETE_CARD } from 'graphql/mutation/card';
import { DELETE_CONTACT } from 'graphql/mutation/contact';
import { openModal } from '@redq/reuse-modal';
import { useMutation } from '@apollo/react-hooks';
import CheckoutWrapper, {
  CheckoutContainer,
  OrderSummary,
  OrderSummaryItem,
  OrderLabel,
  OrderAmount,
  DeliverySchedule,
  Heading,
  DeliveryAddress,
  ButtonGroup,
  Contact,
  PaymentOption,
  CheckoutSubmit,
  CouponBoxWrapper,
  ErrorMsg,
} from './Checkout.style';

import CouponBox, { CouponDisplay } from 'components/CouponBox/CouponBox';
import { ProfileContext } from 'contexts/profile/profile.context';
import { FormattedMessage } from 'react-intl';
import { useCart } from 'contexts/cart/use-cart';
import { APPLY_COUPON } from 'graphql/mutation/coupon';

// The type of props Checkout Form receives
interface MyFormProps {
  token: string;
  deviceType: any;
}

const Checkout: React.FC<MyFormProps> = ({ token, deviceType }) => {
  const {
    removeCoupon,
    coupon,
    applyCoupon,
    clearCart,
    cartItemsCount,
    calculatePrice,
    calculateDiscount,
    calculateSubTotalPrice,
  } = useCart();
  const [couponCode, setCouponCode] = useState('');
  const [couponError, setError] = useState('');
  const { state, dispatch } = useContext(ProfileContext);
  const [loading, setLoading] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const { address, contact, card, schedules } = state;

  const [deleteContactMutation] = useMutation(DELETE_CONTACT);
  const [deleteAddressMutation] = useMutation(DELETE_ADDRESS);
  const [deletePaymentCardMutation] = useMutation(DELETE_CARD);
  const [appliedCoupon] = useMutation(APPLY_COUPON);

  const handleSubmit = async () => {
    setLoading(true);
    if (isValid) {
      clearCart();
      Router.push('/order-received');
    }
    setLoading(false);
  };

  useEffect(() => {
    if (
      calculatePrice() > 0 &&
      cartItemsCount > 0 &&
      address.length &&
      contact.length &&
      card.length &&
      schedules.length
    ) {
      setIsValid(true);
    }
  }, [state]);

  // Add or edit modal
  const handleModal = (
    modalComponent: any,
    modalProps = {},
    className: string = 'add-address-modal'
  ) => {
    openModal({
      show: true,
      config: {
        width: 360,
        height: 'auto',
        enableResizing: false,
        disableDragging: true,
        className: className,
      },
      closeOnClickOutside: true,
      component: modalComponent,
      componentProps: { item: modalProps },
    });
  };

  const handleEditDelete = async (item: any, type: string, name: string) => {
    if (type === 'edit') {
      const modalComponent = name === 'address' ? UpdateAddress : UpdateContact;
      handleModal(modalComponent, item);
    } else {
      switch (name) {
        case 'payment':
          dispatch({ type: 'DELETE_CARD', payload: item.id });

          return await deletePaymentCardMutation({
            variables: { cardId: JSON.stringify(item.id) },
          });
        case 'contact':
          dispatch({ type: 'DELETE_CONTACT', payload: item.id });

          return await deleteContactMutation({
            variables: { contactId: JSON.stringify(item.id) },
          });
        case 'address':
          dispatch({ type: 'DELETE_ADDRESS', payload: item.id });

          return await deleteAddressMutation({
            variables: { addressId: JSON.stringify(item.id) },
          });
        default:
          return false;
      }
    }
  };

  const handleApplyCoupon = async () => {
    const { data }: any = await appliedCoupon({
      variables: { code: couponCode },
    });
    if (data.applyCoupon && data.applyCoupon.discountInPercent) {
      applyCoupon(data.applyCoupon);
      setCouponCode('');
    } else {
      setError('Invalid Coupon');
    }
  };
  const handleOnUpdate = (couponCode: any) => {
    setCouponCode(couponCode);
  };

  return (
    <form>
      <CheckoutWrapper>
        <CheckoutContainer>
          <OrderSummary>
            <OrderSummaryItem style={{ marginBottom: 15 }}>
              <OrderLabel>
                <FormattedMessage id='subTotal' defaultMessage='Subtotal' /> (
                {cartItemsCount}{' '}
                <FormattedMessage id='itemsText' defaultMessage='items' />)
              </OrderLabel>
              <OrderAmount>$ {calculateSubTotalPrice()}</OrderAmount>
            </OrderSummaryItem>

            <OrderSummaryItem style={{ marginBottom: 30 }}>
              <OrderLabel>
                <FormattedMessage
                  id='shippinFeeText'
                  defaultMessage='Shipping Fee'
                />
              </OrderLabel>
              <OrderAmount>$ 00</OrderAmount>
            </OrderSummaryItem>

            <OrderSummaryItem
              style={{ marginBottom: 30 }}
              className='voucherWrapper'
            >
              <OrderLabel>
                <FormattedMessage id='voucherText' defaultMessage='Voucher' />
              </OrderLabel>
              {coupon ? (
                <CouponDisplay
                  code={coupon.code}
                  sign='-'
                  currency='$'
                  price={calculateDiscount()}
                  onClick={(e) => {
                    e.preventDefault();
                    removeCoupon();
                  }}
                />
              ) : (
                <>
                  <CouponBoxWrapper>
                    <CouponBox
                      buttonTitle='Apply'
                      intlCouponBoxPlaceholder='couponPlaceholder'
                      onClick={handleApplyCoupon}
                      value={couponCode}
                      onUpdate={handleOnUpdate}
                      style={{ maxWidth: 350, height: 50 }}
                      intlCouponApplyButton='voucherApply'
                    />
                    {couponError && (
                      <ErrorMsg>
                        <FormattedMessage
                          id='couponError'
                          defaultMessage={couponError}
                        />
                      </ErrorMsg>
                    )}
                  </CouponBoxWrapper>
                </>
              )}
            </OrderSummaryItem>

            <OrderSummaryItem>
              <OrderLabel>
                <FormattedMessage id='totalText' defaultMessage='Total' />
              </OrderLabel>
              <OrderAmount>$ {calculatePrice()}</OrderAmount>
            </OrderSummaryItem>
          </OrderSummary>
          {/* DeliverySchedule */}
          <DeliverySchedule>
            <Heading>
              <FormattedMessage
                id='deliverySchedule'
                defaultMessage='Select Your Delivery Schedule'
              />
            </Heading>
            <RadioGroup
              items={schedules}
              component={(item: any) => (
                <RadioCard
                  id={item.id}
                  key={item.id}
                  title={item.title}
                  content={item.time_slot}
                  name='schedule'
                  checked={item.type === 'primary'}
                  withActionButtons={false}
                  onChange={() =>
                    dispatch({
                      type: 'SET_PRIMARY_SCHEDULE',
                      payload: item.id.toString(),
                    })
                  }
                />
              )}
            />
          </DeliverySchedule>
          {/* DeliveryAddress */}
          <DeliveryAddress>
            <Heading>
              <FormattedMessage
                id='checkoutDeliveryAddress'
                defaultMessage='Select Your Delivery Address'
              />
            </Heading>
            <ButtonGroup>
              <RadioGroup
                items={address}
                component={(item: any) => (
                  <RadioCard
                    id={item.id}
                    key={item.id}
                    title={item.name}
                    content={item.info}
                    name='address'
                    checked={item.type === 'primary'}
                    onChange={() =>
                      dispatch({
                        type: 'SET_PRIMARY_ADDRESS',
                        payload: item.id.toString(),
                      })
                    }
                    onEdit={() => handleEditDelete(item, 'edit', 'address')}
                    onDelete={() => handleEditDelete(item, 'delete', 'address')}
                  />
                )}
                secondaryComponent={
                  <Button
                    title='Add Address'
                    iconPosition='right'
                    colors='primary'
                    size='small'
                    variant='outlined'
                    type='button'
                    intlButtonId='addAddressBtn'
                    onClick={() =>
                      handleModal(UpdateAddress, 'add-address-modal')
                    }
                  />
                }
              />
            </ButtonGroup>
          </DeliveryAddress>
          {/* Contact number */}
          <Contact>
            <Heading>
              <FormattedMessage
                id='contactNumberText'
                defaultMessage='Select Your Contact Number'
              />
            </Heading>
            <ButtonGroup>
              <RadioGroup
                items={contact}
                component={(item: any) => (
                  <RadioCard
                    id={item.id}
                    key={item.id}
                    title={item.type}
                    content={item.number}
                    checked={item.type === 'primary'}
                    onChange={() =>
                      dispatch({
                        type: 'SET_PRIMARY_CONTACT',
                        payload: item.id.toString(),
                      })
                    }
                    name='contact'
                    onEdit={() => handleEditDelete(item, 'edit', 'contact')}
                    onDelete={() => handleEditDelete(item, 'delete', 'contact')}
                  />
                )}
                secondaryComponent={
                  <Button
                    title='Add Contact'
                    iconPosition='right'
                    colors='primary'
                    size='small'
                    variant='outlined'
                    type='button'
                    intlButtonId='addContactBtn'
                    onClick={() =>
                      handleModal(UpdateContact, 'add-contact-modal')
                    }
                  />
                }
              />
            </ButtonGroup>
          </Contact>
          {/* PaymentOption */}
          <PaymentOption>
            <Heading>
              <FormattedMessage
                id='selectPaymentText'
                defaultMessage='Select Payment Option'
              />
            </Heading>
            <PaymentGroup
              name='payment'
              deviceType={deviceType}
              items={card}
              onEditDeleteField={(item: any, type: string) =>
                handleEditDelete(item, type, 'payment')
              }
              onChange={(item: any) =>
                dispatch({
                  type: 'SET_PRIMARY_CARD',
                  payload: item.id.toString(),
                })
              }
              handleAddNewCard={() => {
                handleModal(
                  StripePaymentForm,
                  { totalPrice: calculatePrice() },
                  'add-address-modal stripe-modal'
                );
              }}
            />
          </PaymentOption>
          {/* CheckoutSubmit */}
          <CheckoutSubmit>
            <Button
              onClick={handleSubmit}
              type='button'
              disabled={!isValid}
              title='Proceed to Checkout'
              // size='small'
              intlButtonId='proceesCheckout'
              loader={<Loader />}
              isLoading={loading}
            />
          </CheckoutSubmit>
        </CheckoutContainer>
      </CheckoutWrapper>
    </form>
  );
};

export default Checkout;
