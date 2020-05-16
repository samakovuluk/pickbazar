import React, { useContext, useCallback } from 'react';
import { useRouter } from 'next/router';
import { Waypoint } from 'react-waypoint';
import SearchBox from 'components/SearchBox/SearchBox';
import { SearchContext } from 'contexts/search/search.context';
import { useStickyDispatch } from 'contexts/app/app.provider';
import { FormattedMessage } from 'react-intl';
import {
  BannerWrapper,
  BannerHeading,
  BannerSubHeading,
  BannerComponent,
} from './Banner.style';

type BannerProps = {
  imageUrl: string;
  intlTitleId: string;
  intlDescriptionId: string;
};

const Banner: React.FC<BannerProps> = ({
  imageUrl,
  intlTitleId,
  intlDescriptionId,
}) => {
  const { state, dispatch } = useContext(SearchContext);
  const router = useRouter();
  // const { text } = state;

  const { pathname } = router;

  const handleSearchInput = (text: string) => {
    dispatch({
      type: 'UPDATE',
      payload: {
        ...state,
        text,
      },
    });
  };

  function handleClickSearchButton() {
    const { page, ...urlState } = state;

    router.push(
      {
        pathname: pathname,
        query: { ...urlState },
      },
      {
        pathname: pathname === '/' ? `${pathname}grocery` : pathname,
        query: { ...urlState },
      },
      { shallow: true }
    );
  }
  const useDispatch = useStickyDispatch();
  const setSticky = useCallback(() => useDispatch({ type: 'SET_STICKY' }), [
    useDispatch,
  ]);
  const removeSticky = useCallback(
    () => useDispatch({ type: 'REMOVE_STICKY' }),
    [useDispatch]
  );

  const onWaypointPositionChange = ({ currentPosition }) => {
    if (!currentPosition || currentPosition === 'above') {
      setSticky();
    }
  };

  return (
    <BannerWrapper
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <BannerComponent>
        <BannerHeading>
          <FormattedMessage
            id={intlTitleId}
            defaultMessage='Set Your Title Through Language File'
            values={{ minute: 90 }}
          />
        </BannerHeading>
        <BannerSubHeading>
          <FormattedMessage
            id={intlDescriptionId}
            defaultMessage='Set Your Description Through Language File'
          />
        </BannerSubHeading>

        <SearchBox
          style={{
            width: 700,
            boxShadow: '0 21px 36px rgba(0,0,0,0.05)',
            borderRadius: '6px',
            overflow: 'hidden',
          }}
          handleSearch={(value: string) => handleSearchInput(value)}
          value={state.text || ''}
          onClick={handleClickSearchButton}
          className='banner-search'
          pathname={pathname}
        />
        <Waypoint
          onEnter={removeSticky}
          onLeave={setSticky}
          onPositionChange={onWaypointPositionChange}
        />
      </BannerComponent>
    </BannerWrapper>
  );
};
export default Banner;
