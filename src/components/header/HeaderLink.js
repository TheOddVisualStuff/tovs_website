import React from 'react';
const classNames = 'float-right font-belwe fs-15px';

const HeaderLink = ({src, children}) => (
  <a href={src} className={classNames}>
    {children}
  </a>
);

export default HeaderLink;
