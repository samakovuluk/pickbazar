import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const LeftMenuBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
`;

export const MainMenu = styled.div`
  display: flex;
  align-items: center;

  .popover-wrapper {
    .popover-content {
      .menu-item {
        font-family: 'Lato', sans-serif;
        a {
          font-size: 15px;
          font-weight: 700;
          color: ${themeGet('colors.darkBold', '#0D1136')};
          line-height: 1.2em;
          display: block;
          padding: 15px 30px;
          border-radius: 6px;
          transition: 0.15s ease-in-out;
          display: flex;
          align-items: center;
          @media (max-width: 1400px) {
            margin-right: 10px;
            font-size: 15px;
          }

          @media only screen and (min-width: 991px) and (max-width: 1200px) {
            padding: 15px 30px;
          }

          &:hover {
            color: ${themeGet('colors.primary', '#009E7F')};
          }
          &.current-page {
            color: ${themeGet('colors.primary', '#009E7F')};
            background-color: #fff;
          }
        }
      }
    }
  }
`;

export const SelectedItem = styled.button`
  width: auto;
  height: 38px;
  display: flex;
  align-items: center;
  background-color: ${themeGet('colors.white', '#ffffff')};
  border: 1px solid ${themeGet('colors.borderColor', '#f1f1f1')};
  padding-top: 0;
  padding-bottom: 0;
  padding-left: ${themeGet('space.4', '15')}px;
  padding-right: ${themeGet('space.4', '15')}px;
  border-radius: ${themeGet('radius.3', '6')}px;
  outline: 0;
  min-width: 150px;
  cursor: pointer;

  span {
    display: flex;
    align-items: center;
    font-family: 'Lato', sans-serif;
    font-size: ${themeGet('fontSizes.2', '15')}px;
    font-weight: ${themeGet('fontWeights.6', '700')};
    color: ${themeGet('colors.primary', '#009E7F')};
    text-decoration: none;

    &:first-child {
      margin-right: auto;
    }
  }
`;
export const Icon = styled.div`
  margin-right: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 16px;
`;
export const Arrow = styled.span`
  width: 12px;
  margin-left: 16px;
`;
