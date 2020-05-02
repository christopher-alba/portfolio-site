import React, { Component } from 'react'
import { Spring } from 'react-spring/renderprops'
import VisibilitySensor from 'react-visibility-sensor'
class Header extends Component {
  componentDidMount () {
    document.getElementsByClassName('header')[0].scrollIntoView()
  }
  render () {
    return (
      <div className='header'>
        <Spring
          delay={600}
          from={{ transform: 'translateX(-1000px)', opacity: 0 }}
          to={{ transform: 'translateX(0px)', opacity: 1 }}>
          {props => (
            <img
              style={props}
              className='laptop-man'
              src='/images/man-laptop.png'
              alt=''
            />
          )}
        </Spring>

        <div className='header-text'>
          <Spring
            delay={500}
            from={{ transform: 'translateX(-400px)', opacity: 0 }}
            to={{ transform: 'translateX(0px)', opacity: 1 }}>
            {props => (
              <h1 style={props} className='name'>
    CHRISTOPHER ALBA
              </h1>
            )}
          </Spring>
          <Spring
            delay={650}
            from={{ transform: 'translateX(-400px)', opacity: 0 }}
            to={{ transform: 'translateX(0px)', opacity: 1 }}>
            {props => (
              <h5 style={props} className='profession'>
          A WEB DEVELOPER AND ENGINEER
              </h5>
            )}
          </Spring>
          <Spring
            delay={800}
            from={{ transform: 'translateX(-400px)', opacity: 0 }}
            to={{ transform: 'translateX(0px)', opacity: 1 }}>
            {props => (
              <h5 style={props} className='welcome'>
WELCOME TO MY ONLINE PORTFOLIO
              </h5>
            )}
          </Spring>
        </div>
      </div>
    )
  }
}

export default Header
