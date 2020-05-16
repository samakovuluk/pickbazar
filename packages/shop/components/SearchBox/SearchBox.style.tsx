import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const SearchWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const CurrentType = styled.span`
  font-family: ${themeGet('fontFamily.0', 'sans-serif')};
  font-size: ${themeGet('fontSizes.1', '13')}px;
  color: ${themeGet('colors.primary', '#009E7F')};
  line-height: 38px;
  font-weight: 700;
  padding: 0 15px;
  background-color: ${themeGet('colors.lightColor', '#f7f7f7')};
  border-radius: 6px;
  margin-left: 5px;
  white-space: nowrap;
`;

export const SearchResultWrapper = styled('ul')`
  box-sizing: border-box;
  position: absolute;
  background-color: #fff;
  z-index: 10;
  width: 100%;
  list-style-type: none;
  border-radius: 0 0 3px 3px;
  padding: 0;
  width: 100%;
  margin: 4px 0 0;
  padding-bottom: 10px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.16);
  opacity: 1;
  transition: opacity ease-in-out 500ms;
`;

export const ItemWrapper = styled.li`
  padding: 0.7rem 1.5rem;
  cursor: pointer;
  font-family: ${themeGet('fontFamily.0', 'sans-serif')};
  font-size: ${themeGet('fontSizes.2', '15')}px;
  font-weight: ${themeGet('fontWeights.3', '400')};
  color: ${themeGet('colors.darkBold', '#0D1136')};

  &:hover {
    background-color: ${themeGet('colors.lightBg', '#f4f4f4')};
  }
`;

export const SubmenuHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1.5rem 0.5rem;

  h3 {
    font-size: ${themeGet('fontSizes.2', '15')}px;
    font-family: ${themeGet('fontFamily.0', 'sans-serif')};
    font-weight: ${themeGet('fontWeights.6', '700')};
    margin: 0;
  }

  button {
    background-color: transparent;
    border: 0;
    outline: 0;
    font-family: ${themeGet('fontFamily.0', 'sans-serif')};
    font-size: ${themeGet('fontSizes.2', '15')}px;
    font-weight: ${themeGet('fontWeights.3', '400')};
    color: ${themeGet('colors.darkBold', '#0D1136')};
    box-shadow: none;
    cursor: pointer;
    padding: 0;
  }
`;

export const SearchBox = styled.input`
  /* line-height: 49px; */
  flex-grow: 1;
  font-size: ${themeGet('fontSizes.2', '15')}px;
  color: ${themeGet('colors.darkRegular', '#77798C')};
  border: 0;
  padding: 0 20px;
  background-color: #ffffff;
  margin-right: -1px;
  height: 48px;

  &:focus {
    outline: 0;
  }

  &::-webkit-input-placeholder {
    font-size: ${themeGet('fontSizes.2', '15')}px;
    color: ${themeGet('colors.darkRegular', '#77798C')};
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  &:-moz-placeholder {
    font-size: ${themeGet('fontSizes.2', '15')}px;
    color: ${themeGet('colors.darkRegular', '#77798C')};
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  &::-moz-placeholder {
    font-size: ${themeGet('fontSizes.2', '15')}px;
    color: ${themeGet('colors.darkRegular', '#77798C')};
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  &:-ms-input-placeholder {
    font-size: ${themeGet('fontSizes.2', '15')}px;
    color: ${themeGet('colors.darkRegular', '#77798C')};
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

export const SearchInputWrapper = styled.div`
  width: 100%;

  form {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: 6px;
    background-color: #ffffff;
    overflow: hidden;
    white-space: nowrap;
  }

  &.bordered {
    border: 1px solid ${themeGet('colors.borderColor', '#E6E6E6')};
    border-radius: 6px;
  }

  .searchIcon {
    cursor: pointer;
    padding: 0 15px;
  }
`;

export const SearchButton = styled.button`
  background-color: ${themeGet('colors.primary', '#009E7F')};
  font-size: ${themeGet('fontSizes.2', '15')}px;
  font-family: ${themeGet('fontFamily.0', 'sans-serif')};
  font-weight: 700;
  color: #ffffff;
  display: flex;
  height: 48px;
  align-items: center;
  border: 0;
  outline: 0;
  padding-left: 30px;
  padding-right: 30px;
  cursor: pointer;
  flex-shrink: 0;
  display: flex;
  align-items: center;

  .buttonText {
    padding-left: 10px;
  }

  span {
    display: flex;
  }
`;

export const SearchBoxWrapper = styled.div`
  border: 0;
  width: 100%;
  opacity: 1;
  transition: width ease-in-out 500ms, opacity ease-in-out 500ms;
  height: 100%;
  flex-grow: 1;
  font-size: ${themeGet('fontSizes.2', '15')}px;
  color: ${themeGet('colors.darkRegular', '#77798C')};
  border: none;
  background-color: #ffffff;
  border-radius: 6px 0 0 6px;
  display: flex;
  align-items: center;

  &.hideType {
    ${CurrentType} {
      display: none;
    }
  }

  &.collapsed {
    width: 200px;
    background-color: #f7f7f7;
    border-radius: 5px;
    flex-grow: 0;
    transition: all ease-in-out 500ms;
    position: absolute;
    top: 0;
    right: 0;

    ${SearchInputWrapper} {
      border: 1px solid transparent;
      border-radius: 5px;
    }

    form,
    input {
      background-color: #f7f7f7;
      padding-left: 0 !important;
      width: 100%;

      &::-webkit-input-placeholder {
        font-size: ${themeGet('fontSizes.3', '16')}px;
        color: ${themeGet('colorsdarkRegular', '#77798C')};
      }

      &:-moz-placeholder {
        font-size: ${themeGet('fontSizes.3', '16')}px;
        color: ${themeGet('colorsdarkRegular', '#77798C')};
      }

      &::-moz-placeholder {
        font-size: ${themeGet('fontSizes.3', '16')}px;
        color: ${themeGet('colorsdarkRegular', '#77798C')};
      }

      &:-ms-input-placeholder {
        font-size: ${themeGet('fontSizes.3', '16')}px;
        color: ${themeGet('colorsdarkRegular', '#77798C')};
      }
    }
  }

  &.expanded {
    width: 600px;
    position: absolute;
    top: 0;
    right: 0;
    transition: all ease-in-out 500ms;

    ${SearchInputWrapper} {
      border: 1px solid ${themeGet('colors.borderColor', '#E6E6E6')};
      border-radius: 5px;
    }

    form,
    input {
      width: 100%;
      padding-left: 0 !important;

      &::-webkit-input-placeholder {
        font-size: ${themeGet('fontSizes.3', '16')}px;
        color: ${themeGet('colorsdarkRegular', '#77798C')};
      }

      &:-moz-placeholder {
        font-size: ${themeGet('fontSizes.3', '16')}px;
        color: ${themeGet('colorsdarkRegular', '#77798C')};
      }

      &::-moz-placeholder {
        font-size: ${themeGet('fontSizes.3', '16')}px;
        color: ${themeGet('colorsdarkRegular', '#77798C')};
      }
      &:-ms-input-placeholder {
        font-size: ${themeGet('fontSizes.3', '16')}px;
        color: ${themeGet('colorsdarkRegular', '#77798C')};
      }
    }
  }

  &.minimal {
    form,
    input {
      width: 100%;
      padding-left: 0 !important;
    }
  }
`;

export default SearchWrapper;
