import styled from 'styled-components';

export const Wrapper = styled.label`
  cursor: pointer;
  position: relative;
  /* display: block; */
  display: flex;
  padding: 0 10px;
  width: 100%;
  > input {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    &:checked {
      & ~ .payment-card {
        border-color: #009e7f;
      }
    }
  }
  &:hover {
    .card-remove-btn {
      opacity: 1;
    }
  }
`;
export const PaymentCardWrapper = styled.span`
  /* display: block; */
  display: flex;
  width: 100%;
  flex-direction: column;
  position: relative;
  background-color: ${props => props.color || '#e4f4fc'};
  padding: 15px 20px;
  border-radius: 6px;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => props.color || '#e4f4fc'};
`;

export const CardLogo = styled.span`
  margin-bottom: 17px;
  display: block;
  img {
    max-width: 100%;
    height: 14px;
    display: block;
  }
`;

export const CardNumber = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 9px;
  span {
    font-size: 14px;
    font-weight: 700;
    color: #0d1136;
    line-height: 1.25;
    &.card-number {
      font-size: 12px;
    }
  }
`;

export const CardNumTitle = styled.span`
  font-size: 10px;
  font-weight: 400;
  color: #77798c;
  display: block;
  margin-bottom: 11px;
`;

export const Name = styled.span`
  font-size: 12px;
  font-weight: 700;
  color: #0d1136;
  display: block;
`;
export const DeleteButton = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  outline: 0;
  padding: 0;
  color: #fff;
  background-color: #fc5c63;
  position: absolute;
  top: 10px;
  right: 20px;
  z-index: 9;
  opacity: 0;
  transition: 0.2s ease-in-out;

  svg {
    display: block;
    width: 8px;
    height: auto;
  }
`;
