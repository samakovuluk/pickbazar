import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg);}
`;

const Spinner = styled.div`
  width: 24px;
  height: 24px;
  border: 4px solid #ffffff;
  /* border-top: 4px solid #009e7f; */
  border-top: 3px solid ${props => (props.color ? props.color : '#009e7f')};
  border-radius: 50%;
  transition-property: transform;
  animation-name: ${rotate};
  animation-duration: 1.2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

const Loader = color => {
  return <Spinner {...color} />;
};

export default Loader;
