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
    return (
      <div>
        <Header />
        <div id="doublePage">
          <Contact />
          <div className="section group" style={{maxWidth: '1150px', margin: '0 auto'}}>
            <div className="col span_7_of_12" style={overRideStyle}>
              <LabelParagraph label="over">
                The Odd Visual Stuff denkt, ontwerpt en creëert interdisiplinair.
                Dat betekent dat je niet klaar bent met alleen een logo of website. Maar het begint allemaal concept. Een groot netwerk van creative collaga’s maakt het mogelijk om zo divers Design te maken.
              </LabelParagraph>
            </div>

            <div className="col span_7_of_12" style={overRideStyle}>
              <LabelParagraph label="services" style={overRideStyle}>
                Verbazen en laten zien wat er mogelijk is. Dat is het doel van Creative Direction. The Odd Visual Stuff helpt mensen en merken de volgende stap te maken Een duidelijk idee en motivatie is net zo belangerijk.
              </LabelParagraph>
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

        <div className="section group" style={{maxWidth: '1150px', margin: '0 auto', height: '346px'}}>
          <div className="col span_7_of_12" style={Object.assign(overRideStyle, {margin: '72px auto 0'})}>
            <LabelParagraph label="over">
              The Odd Visual Stuff denkt, ontwerpt en creëert interdisiplinair.
              Dat betekent dat je niet klaar bent met alleen een logo of website. Maar het begint allemaal concept.
              Een groot netwerk van creative collaga’s maakt het mogelijk om zo divers Design te maken.
            </LabelParagraph>
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
