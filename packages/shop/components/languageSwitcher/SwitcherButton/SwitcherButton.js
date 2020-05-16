import React from 'react';
// import Link from 'next/link';
// import Image from 'reusecore/src/elements/Image';
// import Button from 'reusecore/src/elements/Button';

const EnvatoButton = ({ onClick, imgSrc }) => {
  return (
    <EnvatoButtonWrapper onClick={onClick}>
      <img src={imgSrc} alt="Language Change Button" alt="language switcher" />
    </EnvatoButtonWrapper>
  );
};

export default EnvatoButton;
