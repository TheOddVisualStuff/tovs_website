import React from 'react';
import LabelParagraph from '../label-paragraph';

export default class Contact extends React.Component {
  render() {
    const bgColor = {
    };
    const labelStyle = {
      paddingTop: '16px',
      paddingRight: '5px',
      fontSize: '13px',
      textTransform: 'lowercase',
      fontFamily: 'BelweLtBTWXX-Medium',
      letterSpacing: '0.50px'
    };
    return (
      <div>
        <section className="max-width-970 section group" style={{ margin: '0 auto', paddingTop: '140px' }}>
          <div className="col span_1_of_12 ta-right">
            <div style={ labelStyle }>
              Kijk
            </div>
          </div>
          <div className="col0 span_2_of_12 fs-23px f-paragraph">
            Instagram <br />
            Facebook
          </div>
          <div className="col0 span_2_of_12 fs-23px f-paragraph">
            Twitter <br />
            Linkedin
          </div>
          <div className="col0 span_2_of_12 fs-23px f-paragraph">
            Behance <br />
            Medium
          </div>
          <div className="col0 span_1_of_12 fs-23px f-paragraph">
            Dribbble <br />
            Tumblr
          </div>
          <div className="col span_1_of_12 ta-right">
            <div style={ labelStyle }>
              Lees
            </div>
          </div>
          <div className="col0 fs-23px f-paragraph" style={{ width: '31%'}}>
            Meld je aan voor de Nieuwsbrief
          </div>
        </section>

        <section className="max-width-970 section group" style={{ margin: '0 auto', paddingTop: '105px' }}>
          <div className="col fs-23px f-paragraph" style={{ width: '21%'}}>

            <section className="section group">
              <div className="col span_4_of_12 ta-right">
                <div style={ Object.assign({}, labelStyle, {paddingTop: '6px'}) }>
                  Snel
                </div>
              </div>
              <div className="col0 span_8_of_12 fs-23px f-paragraph">
                +3106123456
              </div>
            </section>

            <section className="section group">
              <div className="col span_4_of_12 ta-right">
                <div style={ Object.assign({}, labelStyle, {paddingTop: '6px'}) }>
                  Traag
                </div>
              </div>
              <div className="col0 span_8_of_12 fs-23px f-paragraph">
                orphe@tovs.nla
              </div>
            </section>

          </div>

          <div className="col0 span_2_of_12 ta-right">
            <div style={ labelStyle }>
              Ontmoet
            </div>
          </div>
          <div className="col0 span_3_of_12 fs-23px f-paragraph">
            Groene Hilledijk <br />
            3073 AG Rotterdam <br />
            Nederland
          </div>


          <div className="col0 fs-23px f-paragraph" style={{ width: '25%'}}>
            <section className="section group">
              <div className="col span_4_of_12 ta-right">
                <div style={ Object.assign({}, labelStyle, {paddingTop: '6px'}) }>
                  KvK
                </div>
              </div>
              <div className="col0 span_8_of_12 fs-23px f-paragraph">
                60376651
              </div>
            </section>
            <section className="section group">
              <div className="col span_4_of_12 ta-right">
                <div style={ Object.assign({}, labelStyle, {paddingTop: '6px'}) }>
                  BTW
                </div>
              </div>
              <div className="col0 span_8_of_12 fs-23px f-paragraph">
                NL117370101B01
              </div>
            </section>
          </div>

        </section>
      </div>
    );
  }
}
