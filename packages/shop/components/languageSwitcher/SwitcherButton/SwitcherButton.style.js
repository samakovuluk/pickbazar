import styled, { keyframes } from 'styled-components';

const Animation = keyframes`
  from {
    transform: translateY(5px) scale(.8);
  }
  to{
    transform: translateY(0px) scale(1);
  }
`;

const EnvatoButtonWrapper = styled.div`
  position: fixed;
  bottom: 33px;
  right: 20px;
  width: 65px;
  height: 65px;
  border-radius: 50%;
  overflow: hidden;
  z-index: 9;
  background: rgb(47, 128, 237);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &.stopAnimation {
    animation: 0;
    img {
      width: 22px;
    }
  }
  @media (min-width: 768px) {
    animation: 0.7s ${Animation} infinite ease-in-out;
    animation-direction: alternate;
  }
  @media (max-width: 767px) {
    bottom: 15px;
    right: 10px;
    width: 40px;
    height: 40px;
  }
  img {
    width: 100%;
    height: auto;
    display: block;
    height: 30px;
    width: 40px;
    margin-bottom: 0;
    cursor: pointer;
    @media (max-width: 767px) {
      height: 20px;
      width: 25px;
    }
    .envato-buy-button {
      width: 100%;
      border-radius: 0;
    }
  }
`;

export default EnvatoButtonWrapper;
