import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateNav } from '../actions/index'
import VisibilitySensor from 'react-visibility-sensor'
import { animated } from 'react-spring/renderprops'
let aboutMe = [
  `My passion for software development began during my first year of engineering. Since then, I have studied software outside of university and am currently exploring the world of web development. I really enjoy the learning and satisfaction that come from building and completing software projects and is one of the reasons I have chosen this career path. `,
  `I am currently enrolled in a bachelors of engineering (honors) in Computer Systems Engineering at the University of Auckland. I am currently in the second year of engineering and will graduate in 2022 if all goes well. In this degree, we learn about electronics, hardware, and software, and how these work together.`
]
class About extends Component {
state = {
  currentIndex: 0
}
prev = () => {
  if (this.state.currentIndex > 0) {
    this.setState({ currentIndex: this.state.currentIndex - 1 })
  }
}
next = () => {
  if (this.state.currentIndex < aboutMe.length - 1) {
    this.setState({ currentIndex: this.state.currentIndex + 1 })
  }
}
setIndex = index => {
  this.setState({ currentIndex: index })
}
onChange = visible => {
  if (visible) {
    this.props.updateNav('header')
  }
}
render () {
  return (
    <VisibilitySensor
      onChange={visible => this.onChange(visible)}
      partialVisibility={true}
      offset={{ top: 500 }}>
      <animated.div className='about-section' style={this.props.styles}>
        <h1>ABOUT ME</h1>
        <div className='carousel'>
          <div className='carousel-main'>
            <div
              onClick={this.prev}
              className={`arrows ${
                this.state.currentIndex > 0 ? `visible` : `hidden`
              }`}>
              <i className='fas fa-arrow-circle-left'></i>
            </div>
            <p>{aboutMe[this.state.currentIndex]}</p>
            <div
              onClick={this.next}
              className={`arrows ${
                this.state.currentIndex < aboutMe.length - 1
                  ? `visible`
                  : `hidden`
              }`}>
              <i className='fas fa-arrow-circle-right'></i>
            </div>
          </div>
          <div className='carousel-index'>
            {aboutMe.map((item, index) => {
              return (
                <i key ={index}
                  onClick={() => this.setIndex(index)}
                  className={`fab fa-react ${
                    this.state.currentIndex === index ? `visible` : `hidden`
                  }`}></i>
              )
            })}
          </div>
        </div>
      </animated.div>
    </VisibilitySensor>
  )
}
}

const mapDispatchToProps = {
  updateNav
}

export default connect(undefined, mapDispatchToProps)(About)
