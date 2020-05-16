import styled from 'styled-components';

const DropdownWrapper = styled.div`
  position: relative;

  .dropdown-handler {
    width: auto;
    height: auto;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.35s ease-in-out;

    &.active {
      background-color: #f7f7f7;
    }
  }

  .dropdown-content {
    top: calc(100% + 5px);
    left: 0;
    right: auto;
    display: inline-block;
    min-width: 200px;
    position: absolute;
    border-radius: 6px;
    background-color: #ffffff;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.16);
    z-index: 99;
  }

  /* If direction prop set to right */
  &.right {
    .dropdown-content {
      left: auto;
      right: 0;
    }

    .dropdown-handler {
      margin-left: auto;
    }
  }
`;

export default DropdownWrapper;
