import React, { useContext } from 'react';
import Router from 'next/router';
import { AuthContext } from 'contexts/auth/auth.context';
import {
  SidebarWrapper,
  SidebarTop,
  SidebarBottom,
  SidebarMenu,
  LogoutButton,
} from './Sidebar.style';
import { FormattedMessage } from 'react-intl';

const SidebarCategory: React.FC<{}> = () => {
  const {
    authState: { isAuthenticated },
    authDispatch,
  } = useContext<any>(AuthContext);

  const sidebarTopMenu = [
    { link: '/order', intlId: 'sidebarYourOrder' },
    { link: '/help', intlId: 'navlinkHelp' },
  ];

  const sidebarBottomMenu = [
    {
      link: '/profile',
      intlId: 'navlinkAccountSettings',
    },
  ];
  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('access_token');
      authDispatch({ type: 'SIGN_OUT' });
      Router.push('/');
    }
  };
  return (
    <>
      <SidebarWrapper>
        <SidebarTop>
          {sidebarTopMenu.map((item, index) => (
            <SidebarMenu href={item.link} key={index} intlId={item.intlId} />
          ))}
        </SidebarTop>

        <SidebarBottom>
          {sidebarBottomMenu.map((item, index) => (
            <SidebarMenu href={item.link} key={index} intlId={item.intlId} />
          ))}
          <LogoutButton type='button' onClick={handleLogout}>
            <FormattedMessage id='navlinkLogout' defaultMessage='Logout' />
          </LogoutButton>
        </SidebarBottom>
      </SidebarWrapper>
    </>
  );
};

export default SidebarCategory;
