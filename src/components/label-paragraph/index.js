import React from 'react';

export default class LabelParagraph extends React.Component {
  render() {
    const bgColor = {
      // backgroundColor: 'red'
    };
    return (
      <section className="section group">
        <div className="label-paragraph-col span_1_of_4" style={bgColor}>
          {this.props.label}
        </div>
        <div className="label-paragraph-col span_3_of_4" style={bgColor}>
          {this.props.children}
        </div>
      </section>
    );
  }
}
