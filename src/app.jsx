import React from 'react';
import Header from './components/header';
import Contact from './components/contact';
import LabelParagraph from './components/label-paragraph';

export default class App extends React.Component {
  render() {
    const overRideStyle = {
      float: 'none',
      margin: '240px auto 0'
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
        <Header />
        <div id="doublePage">
          <Contact />
          <div className="max-width-970 section group" style={{margin: '170px auto 0'}}>
            <div className="col span_1_of_12 ta-right">
              <div style={ labelStyle }>
                Snel
              </div>
            </div>
            <div className="col0 span_11_of_12 fs-27px f-paragraph">
              The Odd Visual Stuff denkt, ontwerpt en creëert interdisiplinair.
              Dat betekent dat je niet klaar bent met alleen een logo of website. Maar het begint allemaal concept.
              Een groot netwerk van creative collaga’s maakt het mogelijk om zo divers Design te maken.
            </div>
          </div>

          <div className="max-width-970 section group" style={{margin: '210px auto 0'}}>
            <div className="col span_1_of_12 ta-right">
              <div style={ labelStyle }>
                Services
              </div>
            </div>
            <div className="col0 span_11_of_12 fs-27px f-paragraph">
              Verbazen en laten zien wat er mogelijk is. Dat is het doel van Creative Direction.
              The Odd Visual Stuff helpt mensen en merken de volgende stap te maken Een duidelijk idee en motivatie is net zo belangerijk.
            </div>
          </div>

          <div id="home" className="page" style={{height: '100vh', width: '100%', background: 'transparent'}}>
            <div>Yo header</div>
            <div style={{height:'70px', width: '100%'}}>
              <h1 style={{float: 'right'}}>
                (inter)planetary Creative Direction services
              </h1>
            </div>
          </div>
        </div>
        <div className="" style={{height: '146px', textAlign: 'center'}}>Selected Work</div>
        <div className="image1">
          <div style={{textAlign: 'center', backgroundColor: '#2F2F2F', maxWidth: '100%', maxHeight: '605px'}}>
            <img src="/images/project/wyws-magazine1-hero.jpg" alt="" style={{maxWidth: '100%', maxHeight: '605px'}}/>
          </div>
        </div>



        <div className="max-width-970 section group" style={{margin: '85px auto'}}>
          <div className="col span_1_of_12 ta-right">
            <div style={ labelStyle }>
              Services
            </div>
          </div>
          <div className="col0 span_11_of_12 fs-27px f-paragraph">
            Poster can be one of the effective marketing and advertising materials.
            It is also a great tool to use when you want to present your services to a new league or as a point of sale display on picture day.
            The poster must show your products that are available, along with your company name and contact information.
            If you having trouble about creating a good 4 color poster print, a 4 color printing company that has 4 color poster printing service may be able to help you made your poster.
          </div>
        </div>

        <div className="section group" style={{textAlign: 'center', background: '#303030'}}>
          <div className="col span_1_of_2">
            <img src="/images/project/wyws_portfolio_2.jpg" alt="" style={{maxWidth: '100%', maxHeight: '419px'}}/>
          </div>
          <div className="col span_1_of_2">
            <img src="/images/project/wyws_portfolio_3.jpg" alt="" style={{maxWidth: '100%', maxHeight: '419px'}}/>
          </div>
        </div>

        <div className="section group" style={{textAlign: 'center', background: '#303030'}}>
          <div className="col span_1_of_2">
            <img src="/images/project/wyws_portfolio_4.jpg" alt="" style={{maxWidth: '100%', maxHeight: '419px'}}/>
          </div>
          <div className="col span_1_of_2">
            <img src="/images/project/wyws_portfolio_5.jpg" alt="" style={{maxWidth: '100%', maxHeight: '419px'}}/>
          </div>
        </div>

      </div>
    )
  }
}
