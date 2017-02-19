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
          <div className="section group">
            <div className="col span_8_of_12" style={overRideStyle}>
              <LabelParagraph label="over">
                The Odd Visual Stuff denkt, ontwerpt en creëert interdisiplinair.
                Dat betekent dat je niet klaar bent met alleen een logo of website. Maar het begint allemaal concept. Een groot netwerk van creative collaga’s maakt het mogelijk om zo divers Design te maken.
              </LabelParagraph>
            </div>

            <div className="col span_8_of_12" style={overRideStyle}>
              <LabelParagraph label="services" style={overRideStyle}>
                Verbazen en laten zien wat er mogelijk is. Dat is het doel van Creative Direction. The Odd Visual Stuff helpt mensen en merken de volgende stap te maken Een duidelijk idee en motivatie is net zo belangerijk.
              </LabelParagraph>
            </div>
          </div>

          <div id="home" className="page" style={{height: '100vh', widht: '100%', position: 'relative', background: 'transparent'}}>
            <div>Yo header</div>
            <div style={{position: 'absolute', bottom: '0px', height:'70px', width: '100%'}} className="blackBottomGradientReversed">
              <h1 style={{float: 'right'}}>
                (inter)planetary Creative Direction services
              </h1>
            </div>
          </div>
        </div>
        <div className="page" style={{height: '100vh', widht: '100%', position: 'relative', background: 'transparent'}}>
          <div className="" style={{height: '216px'}}>Selected Work</div>
        </div>
      </div>
    )
  }
}
