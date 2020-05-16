import React, { useReducer } from 'react';
import { HeaderContext } from './header.context';
const initialState = {
  desktopHeight: '',
  mobileHeight: '',
};

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'GET_DESKTOP_HEIGHT':
      return {
        ...state,
        desktopHeight: action.payload.desktopHeight,
      };
    case 'GET_MOBILE_HEIGHT':
      return {
        ...state,
        mobileHeight: action.payload.mobileHeight,
      };
    default:
      return state;
  }
}
export const HeaderProvider: React.FunctionComponent = ({ children }) => {
  const [headerState, headerDispatch] = useReducer(reducer, initialState);
  return (
    <HeaderContext.Provider value={{ headerState, headerDispatch }}>
      {children}
    </HeaderContext.Provider>
  );
};
