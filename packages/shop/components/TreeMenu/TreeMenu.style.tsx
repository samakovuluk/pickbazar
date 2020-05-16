import styled from 'styled-components';
import css from '@styled-system/css';
import { animated } from 'react-spring';
export const Header = styled.header(
  (props) =>
    css({
      fontSize: props.depth === 'parent' ? [2] : [1],
      fontWeight: 6,
      display: 'flex',
      alignItems: 'center',
      marginBottom: props.depth === 'parent' ? 12 : 0,
      color:
        props.depth === 'parent'
          ? props.open
            ? 'primary'
            : 'darkBold'
          : props.open
          ? 'primary'
          : 'darkRegular',
      cursor: 'pointer',
      transition: '0.15s ease-in-out',

      '&:hover': {
        color: 'primary',
      },
    }),
  {
    padding: '5px 0',
    outline: 0,
  }
);

export const IconWrapper = styled.div(
  (props) =>
    css({
      width: props.depth === 'child' ? 10 : 16,
      marginRight: props.depth === 'child' ? '8px' : 15,
    }),
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    flexShrink: 0,

    svg: {
      width: '100%',
      height: 'auto',
    },
  }
);

export const Title = styled.span({
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  verticalAlign: 'middle',
  overflow: 'hidden',
});

export const Content = styled(animated.div)({
  willChange: 'transform, opacity, height',
  borderLeft: 0,
  overflow: 'hidden',
});

export const Frame = styled.div(
  (props) =>
    css({
      marginBottom: props.depth === 'parent' ? 15 : 10,
      paddingLeft: props.depth === 'child' ? 32 : 0,
    }),
  {
    position: 'relative',

    overflowX: 'hidden',
  }
);
