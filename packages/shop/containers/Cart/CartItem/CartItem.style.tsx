import styled from 'styled-components';
import css from '@styled-system/css';
export const ItemBox = styled.div(
  css({
    fontSize: 2,
    fontWeight: 6,
    py: 15,
    px: 25,
    borderBottom: `1px solid`,
    borderBottomColor: 'lightColor',
  }),
  {
    display: 'flex',
    alignItems: 'center',
  }
);
export const Information = styled.div({
  display: 'flex',
  flexDirection: 'column',
  marginLeft: '15px',
});
export const Image = styled.img({
  width: 60,
  height: 60,
  objectFit: 'cover',
  margin: '0 15px',
});
export const Name = styled.span(
  css({
    fontWeight: 3,
    color: 'darkBold',
    mb: '10px',
    lineHeight: 1.5,
  })
);
export const Price = styled.span(
  css({
    color: 'primary',
    mb: '10px',
  })
);
export const Weight = styled.span(
  css({
    fontSize: 1,
    fontWeight: 3,
    color: 'darkRegular',
    mb: '5px',
  })
);
export const Total = styled.span(
  css({
    color: 'darkBold',
    ml: 'auto',
  })
);

export const RemoveButton = styled.button({
  padding: '5px',
  border: 0,
  outline: 0,
  marginLeft: '15px',
  cursor: 'pointer',
  color: 'rgba(0, 0, 0, 0.25)',
  transition: 'all 0.4s ease',
  backgroundColor: 'transparent',

  '&:hover': {
    color: '#ea4d4a',
  },
});
