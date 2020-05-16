import React from 'react';
import { useRouter } from 'next/router';
import NoResultSvg from './no-result.svg';
import { NoResultWrapper, ImageWrapper, ButtonWrapper } from './NoResult.style';
import Button from '../Button/Button';
import { ArrowPrev } from 'components/AllSvgIcon';
import { SearchContext } from 'contexts/search/search.context';

type NoResultFoundProps = {
  id?: string;
};

const NoResultFound: React.FC<NoResultFoundProps> = ({ id }) => {
  const router = useRouter();
  const { dispatch } = React.useContext(SearchContext);

  function onClickButton() {
    dispatch({
      type: 'RESET',
    });
    const href = router.pathname;

    router.push(href, href, { shallow: true });
  }
  return (
    <NoResultWrapper id={id}>
      <h3>Sorry, No result found :(</h3>

      <ImageWrapper>
        <img src={NoResultSvg} alt="No Result" />
      </ImageWrapper>

      <ButtonWrapper>
        <div onClick={onClickButton}>
          <Button title="Go Back" iconPosition="left" icon={<ArrowPrev />} />
        </div>
      </ButtonWrapper>
    </NoResultWrapper>
  );
};

export default NoResultFound;
