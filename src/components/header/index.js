import React from 'react';
import cn from 'classnames';

const h1Style = {
  margin: 0,
  float: 'left'
};

const aStyle = {
  float: 'right',
  fontSize: '15px',
  fontFamily: 'belwe'
};

const Header = ({isLarge, linkSrc, linkName}) => {
  const isLargeClass = isLarge && 'large' ? 'Header__top Header__large' : 'Header__small';
  return (
    <header className={cn('Header', isLargeClass)}>
      <div className="margin-0-auto max-width-1200">
        <h1 className="fs-25px tt-uppercase f-tovs" style={ h1Style }>theoddvisualstuff</h1>
        <a href={linkSrc} style={ aStyle }>{linkName}</a>
      </div>
    </header>
  )
};

export default Header;
