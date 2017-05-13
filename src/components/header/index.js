import React from 'react';

export default class Header extends React.Component {
  render() {
    const h1Style = {
      margin: 0,
      padding: '47px 0 0 47px',
      float: 'left'
    };

    const aStyle = {
      float: 'right',
      // marginTop: '54px',
      marginTop: '60px',
      marginRight: '45px',
      fontSize: '15px',
      fontFamily: 'belwe'
    };

    return (
      <header className="header">
        <div className="margin-0-auto max-width-1200">
          <h1 className="fs-25px tt-uppercase f-tovs" style={ h1Style }>theoddvisualstuff</h1>
          <a href="#home" style={ aStyle }>Terug naar Aarde</a>
        </div>
      </header>
    );
  }
}
