import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const CustomizedTable = styled.table`
  && {
    border-collapse: separate;
    border-spacing: 0;

    thead.rc-table-thead {
      th {
        padding: 15px;
        font-family: ${themeGet('fontFamily.0', 'sans-serif')};
        font-size: ${themeGet('fontSizes.1', '13')}px;
        font-weight: ${themeGet('fontWeights.6', '700')};
        color: ${themeGet('colors.darkBold', '#0D1136')};
      }
    }

    tr.rc-table-row {
      &:hover {
        background-color: inherit;
      }

      td {
        padding: 20px 15px;
        font-family: ${themeGet('fontFamily.0', 'sans-serif')};
        font-size: ${themeGet('fontSizes.2', '15')}px;
        font-weight: ${themeGet('fontWeights.3', '400')};
        color: ${themeGet('colors.darkBold', '#0D1136')};
      }

      &:not(.rc-table-expanded-row) {
        cursor: pointer;
      }
    }

    tr.rc-table-expanded-row {
      > td {
        padding: 0;
        white-space: normal;
        border: 1px solid ${themeGet('colors.borderColor', '#E6E6E6')};
        white-space: normal;
      }

      tr.rc-table-row {
        cursor: default;
      }
    }
  }
`;
