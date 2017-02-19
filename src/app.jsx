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

        <div className="page" style={{height: '100vh', widht: '100%', position: 'relative', background: 'transparent'}}>
          <Header />
          <h1 style={{position: 'absolute', bottom: '10px', right: '10px'}}>(inter)planetary Creative Direction services</h1>
        </div>
      </div>
    )
  }
}
