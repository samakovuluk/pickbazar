import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const AccordionWrapper = styled.div`
  .rc-collapse {
    background-color: transparent;
    border-radius: 0;
    border: 0;

    > .rc-collapse-item {
      margin-bottom: 5px;
      border-width: 1px;
      border-style: solid;
      border-color: ${themeGet('colors.borderColor', '#f1f1f1')};
      border-image: initial;
      border-radius: 6px;
      background-color: #ffffff;
      overflow: hidden;

      > .rc-collapse-header {
        display: flex;
        align-items: center;
        padding: 23px 30px;
        padding-right: 25px;
        cursor: pointer;
        outline: 0;
        position: relative;
        justify-content: space-between;

        i {
          order: 2;
          width: 22px;
          height: 22px;
          flex-shrink: 0;
          color: ${themeGet('colors.darkBold', '#0D1136')};
          display: flex;
          align-items: center;
          justify-content: center;
        }

        h3 {
          margin-top: 0px;
          margin-bottom: 0px;
          font-family: 'Lato', sans-serif;
          font-size: ${themeGet('fontSizes.2', '15')}px;
          font-weight: ${themeGet('fontWeights.6', '700')};
          color: ${themeGet('colors.darkBold', '#0D1136')};
          line-height: 1.5;
        }
      }

      .rc-collapse-content {
        padding: 0px;
        > .rc-collapse-content-box {
          box-sizing: border-box;
          margin-top: 0px;
          margin-bottom: 0px;
          padding: 0px 30px 23px;
          p {
            font-family: 'Lato', sans-serif;
            font-size: ${themeGet('fontSizes.2', '15')}px;
            font-weight: ${themeGet('fontWeights.3', '400')};
            color: ${themeGet('colors.darkRegular', '#77798C')};
            line-height: 1.75;
          }
        }
      }
    }
  }
`;

export default AccordionWrapper;
