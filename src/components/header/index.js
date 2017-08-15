import React from 'react';
import cn from 'classnames';
import HeaderLink from './HeaderLink';

const classNames = {
  header: 'margin-0 float-left',
  link: 'float-right font-belwe fs-15px'
};

const Header = ({linkSrc, linkName, isLarge, children}) => {
  const link = children ? children : <HeaderLink src={linkSrc}>{linkName}</HeaderLink>;

  return (
    <header className={cn('Header', isLarge ? 'Header__top Header__large' : 'Header__small')}>
      <div className="margin-0-auto max-width-1200">
        <h1 className={cn("fs-25px tt-uppercase f-tovs", classNames.header)}>
          theoddvisualstuff
        </h1>
        {link}
      </div>
    </header>
  );
}

export default Header;
