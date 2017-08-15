import React from 'react';
import cn from 'classnames';
import Header from './components/header';
import Contact from './components/contact';
import ProjectCard from './components/project-card';
import ProjectCards from '../static/project-cards';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
      animateMenu: false
    };
  }

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

    const toggleMenu = (e) => {
      this.setState({
        showMenu: !this.state.showMenu,
        animateMenu: true
      });
      e.preventDefault();
    };

    return (
      <div>
        <Header linkSrc="#home" linkName="Terug omlaag" isLarge />

        <div id="doublePage">
          <Contact />
          <div className="max-width-970 section group" style={{margin: '170px auto 0'}}>
            <div className="col span_1_of_12 ta-right">
              <div style={ labelStyle }>
                Snel
              </div>
            </div>
            <div className="col0 span_11_of_12 fs-27px f-paragraph f-lh-33px">
              TOVS combineert strategie, art direction en productie tot een Creative Design service.
              Geleverde diensten zijn conceptontwikkeling, (digital)branding, web en print design, ruimtelijk ontwerp
              en video editing.
            </div>
          </div>

          <div className="max-width-970 section group" style={{margin: '150px auto 200px'}}>
            <div className="col span_1_of_12 ta-right">
              <div style={ labelStyle }>
                Services
              </div>
            </div>
            <div className="col0 span_11_of_12 fs-27px f-paragraph f-lh-33px">
              The Odd Visual Stuff (TOVS) is een design studio die inspeelt op verwachtingen.
              Is iets herkenbaar dan volgt er een onverwachte wending. Gebaande paden worden niet bewandeld, echter
              samen stippelen we onze route uit. TOVS kijkt naar wat personen uniek maakt en legt daar de focus op.
              Het resultaat is eigentijds design met een gezonde dosis subversieviteit. TOVS is er voor iedereen die
              zich wilt onderscheiden.
            </div>
          </div>

          <div id="home" className="page" style={{height: 'calc(100vh + 140px)', width: '100%', background: 'transparent'}}>
            <div style={{ position: 'absolute', height: 'calc(100vh + 140px)', width: '100%'}}>

              <Header>
                <a href="#menu" onClick={toggleMenu} className="float-right font-belwe fs-15px">menu</a>
              </Header>

              {this.state.showMenu && <div id="Menu">
                <a href="#menu" onClick={toggleMenu} className="float-left font-belwe fs-15px">X</a>
              </div>}

              <div style={{height:'70px', width: '100%'}}>
                <h1 className={cn('fs-33px font-belwe menuHeader', {
                  'animated': this.state.animateMenu,
                  'animateMenuOpen': this.state.showMenu,
                  'animateMenuClosed': !this.state.showMenu
                })}
                >
                  (inter)planetary Creative Design services
                </h1>
              </div>
              <div style={{ position: 'absolute', bottom: '0px', width: '100%'}}>
                <div className="gradientSelectedWork fs-33px" style={{ height: '76px', paddingTop: '72px', textAlign: 'center'}}>Geselecteerd Werk</div>
              </div>
            </div>
          </div>
        </div>

        <div className="image1">
          <div style={{textAlign: 'center', backgroundColor: '#2F2F2F', maxWidth: '100%', maxHeight: '605px'}}>
            <img src="/images/project/wyws-magazine1-hero.jpg" alt="" style={{maxWidth: '100%', maxHeight: '605px'}}/>
          </div>
        </div>

        <div style={{ background: '#313131' }}>
          <div className="max-width-970 section group" style={ {margin: '0 auto', padding: '85px 0' }}>
            <div className="col span_1_of_12 ta-right">
              <div style={ labelStyle }>
                Probleem
              </div>
            </div>
            <div className="col0 span_11_of_12 fs-23px f-paragraph f-lh-29px">
              De afdeling grafisch ontwerp van de KABK creëert elk jaar hun eigen eindexamen show.
              Hiervoor wordt een groep samengesteld van op dat moment afstuderende studenten. Ik werd gevraagd om deel
              te zijn van de groep uit 2015. Het project bestond uit het ontwerpen van een visuele en interieur
              identiteit voor de hele show.
            </div>
          </div>
        </div>

        <div className="section group" style={{textAlign: 'center', background: '#303030'}}>
          <div className="col span_1_of_2" style={{ margin: 0 }}>
            <img src="/images/project/wyws_portfolio_2.jpg" alt="" style={{maxWidth: '100%', maxHeight: '419px'}}/>
          </div>
          <div className="col span_1_of_2" style={{ margin: 0 }}>
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

        <div style={{ background: '#292929' }}>
          <div className="max-width-970 section group" style={ {margin: '0 auto', padding: '86px 0 95px' }}>
            <div className="col span_1_of_12 ta-right">
              <div style={ Object.assign({}, labelStyle, {paddingTop: '12px'}) }>
                Oplossing
              </div>
            </div>
            <div className="col0 span_11_of_12 fs-23px f-paragraph f-lh-29px">
              De focus was om de attitude van de groep studenten te vertalen. Een poster reeks, tentoonstellings krant
              en website vormen samen de visuele identiteit. Ook hebben we een crowdfunding campagne opgezet en behaald.
              Voor de interieur identiteit is een modulair systeem ontworpen zodat studenten hun eigen meubels
              konden maken.
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: '#292929' }}>
          <div className="margin-0-auto max-width-1440">
            <img src="/images/project/new-wyws_portfolio_6.jpg" alt="" style={{ maxWidth: '100%', maxHeight: '608px' }}/>
          </div>
        </div>

        <div style={{ backgroundColor: '#292929' }}>
          <div className="margin-0-auto max-width-1440">
            <div className="section group">
              <div className="col-mtb1-mrl1 span_1_of_3" style={{ margin: 0 }}>
                <img src="/images/project/wyws_portfolio_1-480.jpg" alt="" style={{ maxWidth: '100%', maxHeight: '601px' }}/>
              </div>
              <div className="col-mtb1-mrl1 span_1_of_3" style={{ margin: 0 }}>
                <img src="/images/project/wyws_portfolio_2-480.jpg" alt="" style={{ maxWidth: '100%', maxHeight: '601px' }}/>
              </div>
              <div className="col-mtb1-mrl1 span_1_of_3" style={{ margin: 0 }}>
                <img src="/images/project/wyws_portfolio_3-480.jpg" alt="" style={{ maxWidth: '100%', maxHeight: '601px' }}/>
              </div>
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: '#292929' }}>
          <div className="margin-0-auto max-width-1440">
            <img src="/images/project/new-wyws_portfolio_10.jpg" alt="" style={{ maxWidth: '100%', maxHeight: '601px' }}/>
          </div>
        </div>

        <div className="section group" style={{background: '#292929'}}>
          <div className="col span_1_of_2" style={{ margin: 0, textAlign: 'right', width: '50%' }}>
            <img src="/images/project/new-wyws_portfolio_11.jpg" alt="" style={{maxWidth: '100%', maxHeight: '513px'}}/>
          </div>
          <div className="col span_1_of_2" style={{ margin: 0, textAlign: 'left', width: '50%' }}>
            <img src="/images/project/new-wyws_portfolio_12.jpg" alt="" style={{maxWidth: '100%', maxHeight: '513px'}}/>
          </div>
        </div>

        <div style={{ background: '#292929', height: '365px', position: 'relative' }}>
          <section className="max-width-1440 section group" style={{ margin: '0 auto', paddingTop: '68px' }}>
            <div className="col span_1_of_12 ta-right">
              <div style={ Object.assign({}, labelStyle, { paddingTop: '13px' }) }>
                Kijk
              </div>
            </div>
            <div className="col0 span_3_of_12 fs-23px f-paragraph f-lh-29px">
              whileyouweresleepingkabk.com<br />
              instagram.com/wyws.kabk<br />
              facebook.com/wywws.kabk<br />
              twitter.com/wyws.kabk
            </div>

            <div className="col span_1_of_12 ta-right">
              <div style={ Object.assign({}, labelStyle, { paddingTop: '13px' }) }>
                Services
              </div>
            </div>
            <div className="col0 span_3_of_12 fs-23px f-paragraph f-lh-29px">
              Creative Direction<br />
              Strategy<br />
              Design<br />
              Development<br />
              Content Production<br />
              Project Management
            </div>

            <div className="col span_1_of_12 ta-right">
              <div style={ Object.assign({}, labelStyle, { paddingTop: '13px' }) }>
                De crew
              </div>
            </div>
            <div className="col0 span_3_of_12 fs-23px f-paragraph f-lh-29px">
              Alyar Aynetchi<br />
              Bram de Leeuw<br />
              Sara Risvaag<br />
              Sepus Noordmans<br />
              Tomas Laar
            </div>
          </section>
          <div style={{ position: 'absolute', bottom: 0, height: 81, width: '100%'}} className="gradientPlaceholder1">
            &nbsp;
          </div>
        </div>

        {ProjectCards.map(project => <ProjectCard key={project.id} {...project} />)}

        <Header linkName="Terug omhoog" linkSrc="#home" />
      </div>
    )
  }
}
