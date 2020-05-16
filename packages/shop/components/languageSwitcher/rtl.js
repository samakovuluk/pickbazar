import styled from 'styled-components';

export const InjectRTL = styled.div`
  font-family: 'Roboto', sans-serif;
  ${({ lang }) =>
    (lang === 'ar' || lang === 'he') &&
    `
    font-family: 'Cairo', sans-serif;    
    `}
`;
