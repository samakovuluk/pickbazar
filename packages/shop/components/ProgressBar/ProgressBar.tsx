import React from 'react';
import {
  ProgressBarWrapper,
  ProgressText,
  ProgressBar,
  ProgressMeter,
} from './ProgressBarStyle';

type ProgressProps = {
  total: any;
  completed: any;
  text?: any;
};

const ProgressBox: React.FC<ProgressProps> = ({ total, completed, text }) => {
  return (
    <>
      <ProgressBarWrapper total={total} completed={completed}>
        <ProgressBar>
          <ProgressMeter
            style={{
              width: `${completed}%`,
            }}
          />
        </ProgressBar>
        <ProgressText>{text}</ProgressText>
      </ProgressBarWrapper>
    </>
  );
};

export default ProgressBox;
