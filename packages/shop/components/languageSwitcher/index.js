import React, { useContext, useState, useCallback, useRef } from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import { FormattedMessage } from 'react-intl';
import EnvatoButtonWrapper from './SwitcherButton/SwitcherButton.style';
import LanguageContext from './context/language.context';
import CrossImage from './SwitcherButton/cross-btn.svg';
import LangImage from './SwitcherButton/language-btn.svg';
import useClickOutside from './useClickOutside';

export default function LanguageSwitcher({ languageConfig }) {
  const {
    state: { lang },
    toggleLanguage,
  } = useContext(LanguageContext);
  const container = useRef();
  const [showSwitcher, setShowSwitcher] = useState(false);
  function handleOutsideClick() {
    setShowSwitcher(false);
  }
  useClickOutside(container, handleOutsideClick);
  const handleSwitcher = useCallback(() =>
    setShowSwitcher(showSwitcher => !showSwitcher)
  );

  console.log(lang);

  return (
    <Wrapper ref={container}>
      {showSwitcher && (
        <Fade bottom duration={800}>
          <SwitcherContainer className={showSwitcher ? 'active' : ''}>
            <SwitcherHeader>
              <FormattedMessage
                id="changeLanguage"
                defaultMessage={'Change Language'}
              />
            </SwitcherHeader>
            <SwitcherContent>
              <SelectLanguage
                lang={lang}
                toggleLanguage={toggleLanguage}
                config={languageConfig}
              />
            </SwitcherContent>
            <SwitcherFooter>
              <FormattedMessage
                id="languageTitle"
                defaultMessage={'Language'}
              />
              <span>: </span>
              <FormattedMessage
                id="languageName"
                defaultMessage={'Country Name'}
              />
            </SwitcherFooter>
          </SwitcherContainer>
        </Fade>
      )}
      <EnvatoButtonWrapper
        onClick={handleSwitcher}
        className={showSwitcher ? 'stopAnimation' : ''}
      >
        <img src={showSwitcher ? CrossImage : LangImage} alt="switcher" />
      </EnvatoButtonWrapper>
    </Wrapper>
  );
}
function SelectLanguage({ toggleLanguage, lang, config = [] }) {
  const handleToggleLanguage = e => {
    toggleLanguage(e.target.value);
    console.log(e.target.value, 'switcher');
  };
  return config.map(item => {
    const isSelected = item.id === lang;
    return (
      <LanguageButton
        key={item.id}
        className={isSelected ? 'active' : ''}
        value={item.language}
        onClick={handleToggleLanguage}
      >
        <img src={item.icon} alt="flag" style={{ pointerEvents: 'none' }} />
      </LanguageButton>
    );
  });
}

const LanguageButton = styled.button``;
const SwitcherContainer = styled.div`
  position: absolute;
  bottom: 90px;
  right: 4px;
  width: 370px;
  height: 185px;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0 15px 30px rgba(73, 129, 206, 0.15);
  background: #fff;
  @media (max-width: 480px) {
    width: 320px;
    height: 195px;
    right: 0;
    bottom: 45px;
  }
  @media (max-width: 320px) {
    width: 300px;
    right: -10px;
  }
`;
const SwitcherHeader = styled.h3`
  background: #f0f4f8;
  color: #fff;
  margin-bottom: 0;
  padding: 20px 30px;
  font-size: 20px;
  margin-top: 0;
  font-size: 18px;
  font-family: 'DM Sans';
  color: rgb(23, 28, 45);
  font-weight: 700;
`;
const SwitcherContent = styled.div`
  padding: 20px 30px 8px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 480px) {
    flex-wrap: wrap;
    padding: 25px 30px 0px;
  }
  button {
    border: 0;
    padding: 0;
    outline: 0;
    cursor: pointer;
    background: transparent;
    border-radius: 50%;
    overflow: hidden;
    @media (max-width: 480px) {
      margin-bottom: 10px;
    }
    &.active {
      border: 0;
      img {
        border-radius: 50%;
        border: 4px solid rgb(47, 128, 237);
        object-fit: cover;
      }
    }
    img {
      margin-bottom: 0;
      display: block;
      width: 45px;
      height: 45px;
      @media (max-width: 480px) {
        width: 38px;
        height: 38px;
      }
    }
  }
`;
const SwitcherFooter = styled.div`
  position: relative;
  background: #fff;
  padding-left: 30px;
  padding-top: 8px;
  padding-right: 30px;
  span {
    font-size: 16px;
    font-family: 'DM Sans';
    color: rgb(23, 28, 45);
    font-weight: 700;
    &:nth-child(1) {
      font-weight: 500;
      color: rgb(23, 28, 45);
    }
  }
`;
const Wrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
`;
