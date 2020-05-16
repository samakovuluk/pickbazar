import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
export const RightMenuBox = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  .menu-icon {
    min-width: 14px;
    margin-right: 7px;
  }

  .menu-item {
    a {
      font-family: 'Lato', sans-serif;
      font-size: ${themeGet('fontSizes.2', '15')}px;
      font-weight: ${themeGet('fontWeights.6', '700')};
      color: ${themeGet('colors.darkBold', '#0D1136')};
      line-height: 1.2em;
      display: block;
      transition: 0.15s ease-in-out;
      display: flex;
      align-items: center;
      margin-right: 45px;

      @media (max-width: 1400px) {
        margin-right: 35px;
        font-size: 15px;
      }
      &:hover {
        color: ${themeGet('colors.primary', '#009E7F')};
      }
      &.current-page {
        color: ${themeGet('colors.primary', '#009E7F')};
      }
    }
  }

  .user-pages-dropdown {
    .popover-handler {
      width: 38px;
      height: 38px;
      border-radius: 50%;
      display: block;
      overflow: hidden;
      img {
        width: 100%;
        height: auto;
        display: block;
      }
    }

    .popover-content {
      .inner-wrap {
        /* padding: ; */
      }
    }
  }
`;
