import React, { Component } from 'react'
import Logo from '../logo.svg'
import Hero from '../images/mainHero.svg'
import Trend from '../images/trend.svg'
class FirstPage extends Component {
  componentWillMount () {}
  render () {
    return (
      <div className='App' style={Styles.MainContainer}>
        {/* <div style={Styles.loading}>
          <div className='spectrum-CircleLoader spectrum-CircleLoader--indeterminate spectrum-CircleLoader--large'>
            <div className='spectrum-CircleLoader-track' />
            <div className='spectrum-CircleLoader-fills'>
              <div className='spectrum-CircleLoader-fillMask1'>
                <div className='spectrum-CircleLoader-fillSubMask1'>
                  <div className='spectrum-CircleLoader-fill' />
                </div>
              </div>
              <div className='spectrum-CircleLoader-fillMask2'>
                <div className='spectrum-CircleLoader-fillSubMask2'>
                  <div className='spectrum-CircleLoader-fill' />
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div style={Styles.left}>
          <div style={Styles.Navbar}>
            <div style={Styles.leftNav}>
              <h1 style={Styles.logo} className='spectrum-Heading--display'>
                R
              </h1>
              <h1 className='spectrum-Heading--display'>elik Store</h1>
            </div>
            <div style={Styles.rightNav}>
              <div style={Styles.navs}>
                <button
                  style={Styles.menuButton}
                  className='spectrum-Button spectrum-Button--overBackground spectrum-Button--quiet'
                >
                  <span className='spectrum-Button-label'>About Us</span>
                </button>
                <button
                  style={Styles.menuButton}
                  className='spectrum-Button spectrum-Button--overBackground spectrum-Button--quiet'
                >
                  <span className='spectrum-Button-label'>Pricing</span>
                </button>
                <button
                  style={Styles.menuButton}
                  className='spectrum-Button spectrum-Button--overBackground spectrum-Button--quiet'
                >
                  <span className='spectrum-Button-label'>Contact</span>
                </button>
                <button
                  style={Styles.menuButton}
                  className='spectrum-Button spectrum-Button--overBackground spectrum-Button--quiet'
                >
                  <span className='spectrum-Button-label'>FAQs</span>
                </button>
              </div>
            </div>
          </div>
          <div style={Styles.mainContent}>
            <div style={Styles.title}>
              <h1 style={Styles.text} className='spectrum-Heading--display'>
                Manage your store with ease using relik. Just post products and share the links across social media.
              </h1>
            </div>
            <div style={Styles.text} style={Styles.subTitle}>
              <h2 className='spectrum-Heading--subtitle1'>
                Relik comes with already made payment options so your customers can pay you with cash on delivery,
                credit/debit cards and/or bitcoin. Start selling in three easy steps
              </h2>
            </div>
            <div style={Styles.buttonLead}>
              <button style={Styles.leadButton} className='spectrum-Button spectrum-Button--primary'>
                <span className='spectrum-Button-label'>Get a store now</span>
              </button>
            </div>
          </div>
        </div>
        <div style={Styles.hero}>
          <img src={Trend} style={Styles.heroImage} alt='website logo' />
        </div>
        <div style={Styles.right}>
          <div style={Styles.rightSideNav}>
            <div style={Styles.buttonHolder}>
              <button style={Styles.signUp} className='spectrum-Button spectrum-Button--cta menuButtons'>
                <span className='spectrum-Button-label'>Sign Up</span>
              </button>
              <button style={Styles.signIn} className='spectrum-Button spectrum-Button--cta menuButtons'>
                <span className='spectrum-Button-label'>Sign In</span>
              </button>
            </div>
          </div>
          <div style={Styles.rightSideNavBottom} />
        </div>
      </div>
    )
  }
}

const Styles = {
  loading: {
    width: '100%',
    height: '100%',
    top: 0,
    backgroundColor: 'white',
    left: 0,
    position: 'absolute',
    display: 'block',

    backgroundColor: '#fff',
    zIndex: 99,
    textAlign: 'center'
  },
  MainContainer: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row'
  },
  text: {
    color: '#3f3d56',
    fontWeight: 20
  },
  left: {
    width: '70%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'hidden',
    overflowX: 'hidden'
  },
  right: {
    width: '30%',
    height: '100%',
    backgroundColor: 'rgb(63,61,86)',
    overflowY: 'hidden',
    overflowX: 'hidden'
  },
  Navbar: {
    width: '100%',
    height: '15%',
    display: 'flex',
    margin: '25px',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  mainContent: {
    width: '100%',
    height: '85%',
    display: 'flex',
    margin: '25px',
    flexDirection: 'column'
  },
  leftNav: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  rightNav: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-even'
  },
  logo: {
    fontSize: 35,
    backgroundColor: '#ff6347',
    padding: 5,
    borderRadius: 10,
    marginRight: 4
  },
  navs: {
    flexDirection: 'row',
    justifyContent: 'space-even',
    display: 'flex',
    marginRight: 40
  },
  logoHead: {
    fontSize: 30,
    color: 'rgb(63,61,86)'
  },
  menuButton: {
    color: 'rgb(63,61,86)',
    fontSize: 20,
    fontWeight: 20,
    fontFamily: 'Kanit'
  },
  rightSideNav: {
    height: '20%',
    width: '100%',
    margin: '30px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  rightSideNavBottom: {
    height: '80%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  signUp: {
    backgroundColor: 'white',
    color: 'rgb(63,61,86)',
    fontSize: 20,
    fontWeight: 20,
    fontFamily: 'Kanit',
    height: 40,
    width: 130,
    borderColor: 'transparent',
    borderRadius: 30
  },
  signIn: {
    backgroundColor: 'white',
    color: 'rgb(63,61,86)',
    fontSize: 20,
    fontWeight: 20,
    fontFamily: 'Kanit',
    height: 40,
    width: 130,
    borderColor: 'transparent',
    borderRadius: 30
  },
  buttonHolder: {
    width: '50%',
    height: '70%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-even'
  },
  hero: {
    position: 'absolute',
    width: '650px',
    height: '650px',
    backgroundColor: 'transparent',
    right: 300,
    bottom: 150
  },
  heroImage: {
    width: '650px',
    height: '650px',
    boxShadow: '10px'
  },
  title: {
    width: '60%'
  },
  subTitle: {
    width: '40%'
  },
  buttonLead: {},
  leadButton: {
    backgroundColor: '#ff6347',
    color: 'white',
    fontSize: 20,
    margin: 10,
    fontWeight: 20,
    fontFamily: 'Kanit',
    borderColor: 'transparent',
    borderRadius: 30
  }
}

export default FirstPage
