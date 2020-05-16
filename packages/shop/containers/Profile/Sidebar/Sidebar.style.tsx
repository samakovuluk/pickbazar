import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import NavLink from 'components/NavLink/NavLink';

const SidebarWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  background-color: #ffffff;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.16);
`;

const SidebarTop = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 40px 0;
`;

const SidebarBottom = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 40px 0;
  background-color: ${themeGet('colors.lightColor', '#F7F7F7')};
`;

const SidebarMenu = styled(NavLink)`
  display: flex;
  a {
    font-family: 'Lato', sans-serif;
    font-size: ${themeGet('fontSizes.2', '15')}px;
    font-weight: ${themeGet('fontWeights.6', '700')};
    color: ${themeGet('colors.darkBold', '#0D1136')};
    transition: color 0.35s ease;
    padding: 15px 60px;

    &.current-page {
      color: ${themeGet('colors.primary', '#009E7F')};
      border-left: 5px solid ${themeGet('colors.primary', '#009E7F')};
      padding-left: 55px;
    }

    &:hover {
      color: ${themeGet('colors.primary', '#009E7F')};
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const LogoutButton = styled.button`
  border: none;
  background-color: transparent;
  text-align: left;
  cursor: pointer;
  font-family: 'Lato', sans-serif;
  font-size: ${themeGet('fontSizes.2', '15')}px;
  font-weight: ${themeGet('fontWeights.6', '700')};
  color: ${themeGet('colors.darkBold', '#0D1136')};
  transition: color 0.35s ease;
  padding: 15px 60px;
  outline: 0;

  &:hover {
    color: ${themeGet('colors.primary', '#009E7F')};
  }

  &:focus {
    box-shadow: none;
  }

  margin-bottom: 0;
`;

export { SidebarWrapper, SidebarTop, SidebarBottom, SidebarMenu, LogoutButton };
