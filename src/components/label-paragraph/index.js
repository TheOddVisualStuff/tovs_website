import React from 'react';

export default class LabelParagraph extends React.Component {
  render() {
    const childrenStyle = {
      fontSize: '23px'
    };
    const labelStyle = {
      fontFamily: 'belwe',
      fontSize: '13px'
    };
    return (
      <section className="section group">
        <div className="label-paragraph-col span_1_of_4" style={labelStyle}>
          <div style={{ textAlign: 'right', paddingRight: '10px', paddingTop: '5px' }}>
            {this.props.label}
          </div>
        </div>
        <div className="label-paragraph-col span_3_of_4" style={childrenStyle}>
          {this.props.children}
        </div>
      </section>
    );
  }
}
