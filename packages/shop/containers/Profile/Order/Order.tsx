import React, { useState, useEffect } from 'react';
import gql from 'graphql-tag';
import { Scrollbars } from 'react-custom-scrollbars';
import { useQuery } from '@apollo/react-hooks';
import {
  OrderBox,
  OrderListWrapper,
  OrderList,
  OrderDetailsWrapper,
  Title,
  ImageWrapper,
  ItemWrapper,
  ItemDetails,
  ItemName,
  ItemSize,
  ItemPrice,
  NoOrderFound,
} from './Order.style';

import OrderDetails from './SingleOrderDetails/OrderDetails';
import OrderCard from './OrderCard/OrderCard';
import OrderCardMobile from './OrderCard/orderCardMobile';
import useComponentSize from 'helper/useComponentSize';
import { FormattedMessage } from 'react-intl';

const progressData = ['Order Received', 'Order On The Way', 'Order Delivered'];

const GET_ORDERS = gql`
  query getAllOrders($text: String, $user: Int!, $limit: Int) {
    orders(text: $text, limit: $limit, user: $user) {
      id
      status
      deliveryAddress
      amount
      date
      subtotal
      deliveryFee
      discount
      deliveryTime
      products {
        title
        price
        total
        image
        weight
        quantity
        id
      }
    }
  }
`;

const orderTableColumns = [
  {
    title: <FormattedMessage id='cartItems' defaultMessage='Items' />,
    dataIndex: '',
    key: 'items',
    width: 250,
    ellipsis: true,
    render: (text, record) => {
      return (
        <ItemWrapper>
          <ImageWrapper>
            <img src={record.image} alt={record.title} />
          </ImageWrapper>

          <ItemDetails>
            <ItemName>{record.title}</ItemName>
            <ItemSize>{record.weight}</ItemSize>
            <ItemPrice>${record.price}</ItemPrice>
          </ItemDetails>
        </ItemWrapper>
      );
    },
  },
  {
    title: (
      <FormattedMessage id='intlTableColTitle2' defaultMessage='Quantity' />
    ),
    dataIndex: 'quantity',
    key: 'quantity',
    align: 'center',
    width: 100,
  },
  {
    title: <FormattedMessage id='intlTableColTitle3' defaultMessage='Price' />,
    dataIndex: '',
    key: 'price',
    align: 'right',
    width: 100,
    render: (text, record) => {
      return <p>${record.total}</p>;
    },
  },
];

type OrderTableProps = {
  deviceType?: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
};

const OrdersContent: React.FC<OrderTableProps> = ({
  deviceType: { mobile, tablet, desktop },
}) => {
  const [order, setOrder] = useState(null);
  const [active, setActive] = useState('');

  const [targetRef, size] = useComponentSize();
  const orderListHeight = size.height - 79;
  const { data, error, loading } = useQuery(GET_ORDERS, {
    variables: {
      limit: 7,
      user: 1,
    },
  });

  useEffect(() => {
    if (data && data.orders && data.orders.length !== 0) {
      setOrder(data.orders[0]);
      setActive(data.orders[0].id);
    }
  }, [data && data.orders]);

  if (loading) {
    return <div>loading...</div>;
  }

  if (error) return <div>{error.message}</div>;

  const handleClick = order => {
    setOrder(order);
    setActive(order.id);
  };

  console.log(data.orders, 'data.orders', order, 'order');

  return (
    <OrderBox>
      {desktop && (
        <>
          <OrderListWrapper style={{ height: size.height }}>
            <Title style={{ padding: '0 20px' }}>
              <FormattedMessage
                id='intlOrderPageTitle'
                defaultMessage='My Order'
              />
            </Title>

            <Scrollbars
              universal
              autoHide
              autoHeight
              autoHeightMin={420}
              autoHeightMax={isNaN(orderListHeight) ? 500 : orderListHeight}
            >
              <OrderList>
                {data.orders.length !== 0 ? (
                  data.orders.map((order: any) => (
                    <OrderCard
                      key={order.id}
                      orderId={order.id}
                      className={order && order.id === active ? 'active' : ''}
                      status={progressData[order.status - 1]}
                      date={order.date}
                      deliveryTime={order.deliveryTime}
                      amount={order.amount}
                      onClick={() => {
                        handleClick(order);
                      }}
                    />
                  ))
                ) : (
                  <NoOrderFound>
                    <FormattedMessage
                      id='intlNoOrderFound'
                      defaultMessage='No order found'
                    />
                  </NoOrderFound>
                )}
              </OrderList>
            </Scrollbars>
          </OrderListWrapper>

          <OrderDetailsWrapper ref={targetRef}>
            <Title style={{ padding: '0 20px' }}>
              <FormattedMessage
                id='orderDetailsText'
                defaultMessage='Order Details'
              />
            </Title>
            {order && order.id && (
              <OrderDetails
                progressStatus={order.status}
                progressData={progressData}
                address={order.deliveryAddress}
                subtotal={order.subtotal}
                discount={order.discount}
                deliveryFee={order.deliveryFee}
                grandTotal={order.amount}
                tableData={order.products}
                columns={orderTableColumns}
              />
            )}
          </OrderDetailsWrapper>
        </>
      )}

      {(mobile || tablet) && (
        <OrderList>
          <OrderCardMobile
            orders={data.orders}
            className={order && order.id === active ? 'active' : ''}
            progressData={progressData}
            columns={orderTableColumns}
            onClick={() => {
              handleClick(order);
            }}
          />
        </OrderList>
      )}
    </OrderBox>
  );
};

export default OrdersContent;
