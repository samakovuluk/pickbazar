import React from 'react';
import { FormattedMessage } from 'react-intl';
import NavLink from 'components/NavLink/NavLink';

import {
  PROCEED_TO_CHECKOUT_PAGE,
  ALTERNATIVE_CHECKOUT_PAGE,
  PROFILE_PAGE,
  ORDER_RECEIVED,
  YOUR_ORDER,
} from 'constants/navigation';

const AUTHORIZED_MENU_ITEMS = [
  {
    link: PROFILE_PAGE,
    label: 'Profile',
    intlId: 'navlinkProfile',
  },
  {
    link: PROCEED_TO_CHECKOUT_PAGE,
    label: 'Checkout',
    intlId: 'navlinkCheckout',
  },
  {
    link: ALTERNATIVE_CHECKOUT_PAGE,
    label: 'Checkout Alternative',
    intlId: 'alternativeCheckout',
  },
  {
    link: YOUR_ORDER,
    label: 'Order',
    intlId: 'sidebarYourOrder',
  },
  {
    link: ORDER_RECEIVED,
    label: 'Order invoice',
    intlId: 'navlinkOrderReceived',
  },
];

type Props = {
  onLogout: () => void;
};

export const AuthorizedMenu: React.FC<Props> = ({ onLogout }) => {
  return (
    <>
      {AUTHORIZED_MENU_ITEMS.map((item, idx) => (
        <NavLink
          key={idx}
          className='menu-item'
          href={item.link}
          label={item.label}
          intlId={item.intlId}
        />
      ))}
      <div className='menu-item' onClick={onLogout}>
        <a>
          <span>
            <FormattedMessage id='navlinkLogout' defaultMessage='Logout' />
          </span>
        </a>
      </div>
    </>
  );
};
