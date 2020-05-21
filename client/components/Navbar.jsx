import React, { Component } from 'react'
import { connect } from 'react-redux'

class Navbar extends React.PureComponent {
state = {
  display: false,
  location: 'about',
  navDisplay: true
}
toggleNav = (bool) => {
  let display = !this.state.display
  if (bool === true || bool === false) {
    this.setState({ navDisplay: bool })
  }
  this.setState({ display })
}
componentDidMount () {
  var prevScrollpos = window.pageYOffset
  window.onscroll = () => {
    var currentScrollPos = window.pageYOffset
    if (prevScrollpos > currentScrollPos) {
      this.toggleNav(true)
    } else {
      this.toggleNav(false)
    }
    prevScrollpos = currentScrollPos
  }
}
componentDidUpdate (prevProps) {
// console.log(prevProps)

  if (prevProps.location.location !== this.props.location.location) {
    // console.log(this.props.location.location)
    // console.log(prevProps.location.location)

    this.setState({ location: this.props.location.location })
  }
}
handleClick = (evt, location) => {
  document.getElementsByClassName(location)[0].scrollIntoView()
  this.setState({ location })
}
render () {
  return (
    <div className={`navbar ${this.state.navDisplay ? `visibleNav` : `hiddenNav`}`} >
      <div
        className={`toggler ${this.state.display ? `toggler-active` : ``}`}
        onClick={this.toggleNav}>
        <i className='fas fa-bars'></i>
      </div>

      <div
        name='header'
        onClick={evt => this.handleClick(evt, 'header')}
        className={`${
          this.state.display ? `nav-link-active` : `nav-link-inactive`
        } ${this.state.location === 'header' ? `current-location` : ``}`}>
        <i name='header' className='fas fa-user'></i>
      </div>
      <div
        name='personal'
        onClick={evt => this.handleClick(evt, 'personal')}
        className={`${
          this.state.display ? `nav-link-active` : `nav-link-inactive `
        } ${this.state.location === 'solo' ? `current-location` : ``}`}>
        <i className='fas fa-paint-brush' disabled></i>
      </div>
      <div
        name='group'
        onClick={evt => this.handleClick(evt, 'group')}
        className={`${
          this.state.display ? `nav-link-active` : `nav-link-inactive`
        } ${this.state.location === 'group' ? `current-location` : ``}`}>
        <i name='personal' className='fas fa-users' disabled></i>
      </div>
      <div
        name='footer'
        onClick={evt => this.handleClick(evt, 'footer')}
        className={`${
          this.state.display ? `nav-link-active` : `nav-link-inactive`
        } ${this.state.location === 'contact' ? `current-location` : ``}`}>
        <i name='personal' className='fas fa-id-card' disabled></i>
      </div>
    </div>
  )
}
}
function mapStateToProps (state) {
  return {
    location: state.updateNav
  }
}
export default connect(mapStateToProps)(Navbar)
