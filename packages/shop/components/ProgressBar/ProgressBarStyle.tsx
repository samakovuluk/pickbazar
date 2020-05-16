import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const ProgressBarWrapper = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ProgressBar = styled('div')`
  width: 100%;
  height: 7px;
  background-color: ${themeGet('colors.borderColor', '#E6E6E6')};
  border-radius: 9px;
  position: relative;
  margin-bottom: 10px;
`;

const ProgressMeter = styled.span`
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${themeGet('colors.primary', '#00C58D')};
  border-radius: 9px;
`;

const ProgressText = styled.span`
  font-family: ${themeGet('fontFamily.0', 'sans-serif')};
  font-size: ${themeGet('fontSizes.2', '15')}px;
  font-weight: 400;
  color: ${themeGet('colors.darkBold', '#0D1136')};
`;

export { ProgressBarWrapper, ProgressBar, ProgressMeter, ProgressText };
