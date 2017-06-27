import React from 'react';
import cn from 'classnames';

export default class Header extends React.Component {
  render() {
    const h1Style = {
      margin: 0,
      float: 'left'
    };

    const aStyle = {
      float: 'right',
      fontSize: '15px',
      fontFamily: 'belwe'
    };

    const isLargeClass = this.props.isLarge && 'large' ? 'top large' : 'small';

    return (
      <header className={cn('Header', isLargeClass)}>
        <div className="margin-0-auto max-width-1200">
          <h1 className="fs-25px tt-uppercase f-tovs" style={ h1Style }>theoddvisualstuff</h1>
          <a href={this.props.linkSrc} style={ aStyle }>{this.props.linkName}</a>
        </div>
      </header>
    );
  }
}
