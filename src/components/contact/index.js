import React from 'react';

export default class Contact extends React.Component {
  render() {
    const bgColor = {
      backgroundColor: 'red'
    };
    return (
      <section className="section group">
        <div className="col span_4_of_12" style={bgColor}>
          4 of 12
        </div>
        <div className="col span_4_of_12" style={bgColor}>
          4 of 12
        </div>
        <div className="col span_4_of_12" style={bgColor}>
          4 of 12
        </div>
      </section>
    );
  }
}
