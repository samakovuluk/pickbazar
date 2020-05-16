import styled from 'styled-components';
import css from '@styled-system/css';
import { variant } from 'styled-system';
export const CounterBox = styled.div(
  css({
    display: 'flex',
    backgroundColor: 'primary',
    color: 'white',
    fontSize: 2,
    fontWeight: 6,
  }),
  {
    borderRadius: 200,
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
    flexShrink: 0,
    '&:focus': {
      outline: 'none',
    },
  },
  variant({
    variants: {
      horizontal: {
        width: 104,
        height: 36,
      },
      vertical: {
        width: 30,
        height: 90,
        flexDirection: 'column-reverse',
      },
      lightHorizontal: {
        width: 104,
        height: 36,
        backgroundColor: 'lightColor',
        color: 'darkBold',
      },
      lightVertical: {
        width: 30,
        height: 90,
        flexDirection: 'column-reverse',
        backgroundColor: 'lightColor',
        color: 'darkBold',
      },
    },
  })
);

export const CounterButton = styled.button(
  {
    border: 'none',
    backgroundColor: 'transparent',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    padding: 10,
    cursor: 'pointer',
    '&:hover, &:focus': {
      outline: 'none',
    },
  },
  variant({
    variants: {
      lightHorizontal: {
        color: 'darkRegular',
      },
      lightVertical: {
        color: 'darkRegular',
      },
    },
  })
);

export const CounterValue = styled.span({
  pointerEvents: 'none',
});
CounterValue.displayName = 'CounterValue';
CounterButton.displayName = 'CounterButton';
CounterBox.displayName = 'CounterBox';
CounterBox.defaultProps = {
  variant: 'horizontal',
};
