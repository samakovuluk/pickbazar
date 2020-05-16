import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import Inputs from "../Input/Input";
import Buttons from "../Button/Button";

export const Button = styled(Buttons)`
  height: calc(100% - 10px);
`;

export const Input = styled(Inputs)`
  && {
    width: 100%;

    .inner-wrap {
      input {
        height: 100%;
        flex-grow: 1;
        font-size: ${themeGet("fontSizes.2", "14")}px;
        color: ${themeGet("colorsdarkRegular", "#77798C")};
        border: none;
        border-radius: 0;
        padding: 0 20px;
        background-color: transparent;
        margin-right: 0;

        &:focus {
          outline: 0;
        }

        &::-webkit-input-placeholder {
          font-size: ${themeGet("fontSizes.2", "14")}px;
          color: ${themeGet("colors.labelColor", "#8c8c8c")};
        }

        &:-moz-placeholder {
          font-size: ${themeGet("fontSizes.2", "14")}px;
          color: ${themeGet("colors.labelColor", "#8c8c8c")};
        }

        &::-moz-placeholder {
          font-size: ${themeGet("fontSizes.2", "14")}px;
          color: ${themeGet("colors.labelColor", "#8c8c8c")};
        }
        &:-ms-input-placeholder {
          font-size: ${themeGet("fontSizes.2", "14")}px;
          color: ${themeGet("colors.labelColor", "#8c8c8c")};
        }
      }
    }
  }
`;

export const CouponBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 50px;
  padding-right: 5px;
  border-radius: 6px;
  background-color: #ffffff;
  overflow: hidden;
  border: 1px solid #ededed;
`;

export const Display = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const CouponCode = styled.span`
  font-size: ${themeGet("fontSizes.2", "14")}px;
  color: ${themeGet("colors.primary", "#009E7F")};
  font-weight: 700;
  text-transform: uppercase;
`;

export const DiscountPrice = styled.span`
  font-size: ${themeGet("fontSizes.2", "14")}px;
  color: ${themeGet("colors.primary", "#009E7F")};
  font-weight: 700;
  margin-left: auto;
`;

export const CancelBtn = styled.button`
  color: ${themeGet("colors.secondary", "#ff5b60")};
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: 0;
  outline: 0;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 0;
  right: -30px;
  cursor: pointer;
`;
