import React, { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { openModal, closeModal } from '@redq/reuse-modal';
import { DrawerProvider } from 'contexts/drawer/drawer.provider';
import MobileDrawer from './MobileDrawer';
import {
  MobileHeaderWrapper,
  MobileHeaderInnerWrapper,
  DrawerWrapper,
  LogoWrapper,
  SearchWrapper,
  SearchModalWrapper,
  SearchModalClose,
} from './Header.style';
import SearchBox from 'components/SearchBox/SearchBox';
import { SearchContext } from 'contexts/search/search.context';
import { HeaderContext } from 'contexts/header/header.context';
import LogoImage from 'image/logo.svg';

import { SearchIcon, LongArrowLeft } from 'components/AllSvgIcon';
import Logo from 'components/Logo/Logo';
import LanguageSwitcher from './Menu/LanguageSwitcher/LanguageSwitcher';
import { isCategoryPage } from '../is-home-page';
import useDimensions from 'helper/useComponentSize';

type MobileHeaderProps = {
  className?: string;
  pathname?: string;
  closeSearch?: any;
};
type SearchModalProps = {
  state?: any;
  handleSearch?: any;
  pathname?: string;
};

const SearchModal: React.FC<SearchModalProps> = ({
  state,
  pathname,
  handleSearch,
}) => {
  const router = useRouter();
  const [text, setText] = useState(state.text || '');
  const handleSearchInput = (text: string) => {
    setText(text);
  };
  const { page, ...urlState } = state;

  const handleClickSearchButton = () => {
    handleSearch(text);
    router.push({
      pathname: pathname,
      query: {
        ...urlState,
        text,
      },
    });
    closeModal();
  };
  return (
    <SearchModalWrapper>
      <SearchModalClose type='submit' onClick={() => closeModal()}>
        <LongArrowLeft />
      </SearchModalClose>
      <SearchBox
        className='header-modal-search'
        bordered={false}
        inputStyle={{ height: 35 }}
        buttonText=''
        placeholder='Search'
        handleSearch={handleSearchInput}
        value={text}
        onClick={handleClickSearchButton}
        pathname={pathname}
      />
    </SearchModalWrapper>
  );
};

const MobileHeader: React.FC<MobileHeaderProps> = ({ className, pathname }) => {
  const { state, dispatch } = useContext(SearchContext);

  const [mobileHeaderRef, dimensions] = useDimensions();
  const { headerDispatch } = useContext<any>(HeaderContext);

  const headerHeight = dimensions.height;

  React.useEffect(() => {
    headerDispatch({
      type: 'GET_MOBILE_HEIGHT',
      payload: {
        ...state,
        mobileHeight: headerHeight,
      },
    });
  }, [headerHeight]);

  const handleSearch = (text: string) => {
    dispatch({
      type: 'UPDATE',
      payload: {
        ...state,
        text,
      },
    });
  };
  const handleSearchModal = () => {
    openModal({
      show: true,
      config: {
        enableResizing: false,
        disableDragging: true,
        className: 'search-modal-mobile',
        width: '100%',
        height: '100%',
      },
      closeOnClickOutside: false,
      component: SearchModal,
      componentProps: { state, pathname, handleSearch },
      closeComponent: () => <div />,
    });
  };

  const isHomePage = isCategoryPage(pathname);

  return (
    <DrawerProvider>
      <MobileHeaderWrapper>
        <MobileHeaderInnerWrapper className={className} ref={mobileHeaderRef}>
          <DrawerWrapper>
            <MobileDrawer />
          </DrawerWrapper>

          <LogoWrapper>
            <Logo imageUrl={LogoImage} alt='shop logo' />
          </LogoWrapper>

          <LanguageSwitcher />

          {isHomePage ? (
            <SearchWrapper
              onClick={handleSearchModal}
              className='searchIconWrapper'
            >
              <SearchIcon />
            </SearchWrapper>
          ) : null}
        </MobileHeaderInnerWrapper>
      </MobileHeaderWrapper>
    </DrawerProvider>
  );
};

export default MobileHeader;
