import styled, { keyframes } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
const Fade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const PopoverWrapper = styled.div`
  @media (min-width: 991px) {
    display: none;
  }

  .popover-handler {
    display: block;
    padding: 15px;
    cursor: pointer;
  }
  .popover-content {
    position: relative;
    top: auto;
    left: auto;
    right: auto;
    border-radius: 0;
    box-shadow: none;
    padding: 25px 35px;
    border-top: 1px solid ${themeGet('colors.borderColor', '#f1f1f1')};

    &::before {
      display: none;
    }
    .category-dropdown {
      animation: ${Fade} 0.6s;
    }
    @media (max-width: 990px) {
      padding: 25px;
    }
  }
`;

export const RequestMedicine = styled.span`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding-left: 50px;
  background-color: ${themeGet('colors.primary', '#009E7F')};
  font-size: 14px;
  font-weight: 700;
  color: #ffffff;
  cursor: pointer;

  @media (max-width: 990px) {
    justify-content: center;
    padding: 0;
    border-radius: 6px;
  }
`;

export const SidebarWrapper = styled.div`
  padding: 45px 0px;
  padding-top: 35px;
  padding-right: 0;

  @media (max-width: 1199px) {
    padding: 40px 0px;
    padding-right: 0;
  }

  @media (max-width: 990px) {
    display: none;
    padding: 0;
  }
`;

export const CategoryWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const TreeWrapper = styled.div`
  padding-left: 50px;
  padding-right: 20px;
`;

export const PopoverHandler = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #0d1136;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
    &:first-child {
      flex-grow: 1;
      svg {
        margin-right: 10px;
      }
    }
    &:last-child {
      color: ${themeGet('colors.darkRegular', '#77798C')};
    }
  }
`;

export const Loading = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: ${themeGet('colors.darkBold', '#0D1136')};
`;
