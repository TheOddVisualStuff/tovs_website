import React from 'react';
import Header from './components/header';
import Contact from './components/contact';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Contact />
        <h1>It Works! boom</h1>
        <p>This React project just works including <span className="redBg">module</span> local styles.</p>
        <p>Enjoy!</p>
        <div className="section group">
          <div className="col span_1_of_12">
            1 of 12
          </div>
          <div className="col span_1_of_12">
            1 of 12
          </div>
          <div className="col span_1_of_12">
            1 of 12
          </div>
          <div className="col span_1_of_12">
            1 of 12
          </div>
          <div className="col span_1_of_12">
            1 of 12
          </div>
          <div className="col span_1_of_12">
            1 of 12
          </div>
          <div className="col span_1_of_12">
            1 of 12
          </div>
          <div className="col span_1_of_12">
            1 of 12
          </div>
          <div className="col span_1_of_12">
            1 of 12
          </div>
          <div className="col span_1_of_12">
            1 of 12
          </div>
          <div className="col span_1_of_12">
            1 of 12
          </div>
          <div className="col span_1_of_12">
            1 of 12
          </div>
        </div>
      </div>
    )
  }
}
