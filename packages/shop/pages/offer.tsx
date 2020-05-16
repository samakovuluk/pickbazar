import React from 'react';
import { NextPage } from 'next';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { FormattedMessage } from 'react-intl';
import { SEO } from 'components/seo';
import CartPopUp from 'containers/Cart/CartPopUp';
import { withApollo } from 'helper/apollo';
import { Modal } from '@redq/reuse-modal';

import {
  OfferPageWrapper,
  ProductsRow,
  MainContentArea,
  ProductsCol,
} from 'styled/pages.style';
import GiftCard from 'components/GiftCard/GiftCard';
import SiteFooter from 'components/SiteFooter/SiteFooter';

const GET_COUPON = gql`
  query {
    coupons {
      id
      code
      image
      discountInPercent
    }
  }
`;
type GiftCardProps = {
  deviceType: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
};

const GiftCardPage: NextPage<GiftCardProps> = ({ deviceType }) => {
  const { data, error } = useQuery(GET_COUPON);
  if (error) return <div>{error.message}</div>;

  return (
    <Modal>
      <SEO title='Offer - PickBazar' description='Offer Details' />
      <OfferPageWrapper>
        <MainContentArea>
          <div style={{ width: '100%' }}>
            <ProductsRow>
              {data && data.coupons
                ? data.coupons.map((coupon) => (
                    <ProductsCol key={coupon.id}>
                      <GiftCard image={coupon.image} code={coupon.code} />
                    </ProductsCol>
                  ))
                : null}
            </ProductsRow>
          </div>
        </MainContentArea>

        <SiteFooter style={{ marginTop: 50 }}>
          <FormattedMessage
            id='siteFooter'
            defaultMessage='Pickbazar is a product of'
          />
          &nbsp; <a href='/'>Redq, Inc.</a>
        </SiteFooter>
      </OfferPageWrapper>
      <CartPopUp deviceType={deviceType} />
    </Modal>
  );
};
export default withApollo(GiftCardPage);
