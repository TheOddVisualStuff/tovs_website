import React from 'react';
import LabelParagraph from '../label-paragraph';

export default class Contact extends React.Component {
  render() {
    const bgColor = {
      backgroundColor: 'red'
    };
    return (
      <section className="section group blackBottomGradient">
        <div className="col span_4_of_12" style={bgColor}>
          <LabelParagraph label="snel">+3106123456</LabelParagraph>
        </div>
        <div className="col span_4_of_12" style={bgColor}>
          <LabelParagraph label="ontmoet">
            Groene Hilledijk <br />
            3073 AG <br />
            Rotterdam
          </LabelParagraph>
          <LabelParagraph label="kvk">
            60376651
          </LabelParagraph>
          <LabelParagraph label="btw">
            NL117370101B01
          </LabelParagraph>
        </div>
        <div className="col span_4_of_12" style={bgColor}>
          <LabelParagraph label="kijk">
            Instagram <br />
            Facebook <br />
            Twitter <br />
            Linkedin <br />
            Behance
          </LabelParagraph>
        </div>
      </section>
    );
  }
}
