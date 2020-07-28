import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateNav } from '../actions/index'
import VisibilitySensor from 'react-visibility-sensor'
class Footer extends Component {
	onChange = visible => {
	  if (visible) {
	    this.props.updateNav('contact')
	  }
	}
	render () {
	  return (
	    <VisibilitySensor
	      onChange={this.onChange}
	      offset={{ top: 500 }}
	      partialVisibility={true}>
	      <div className='footer'>
	        <img className='contact-me' src='./images/contact-me.png' alt='' />
	        <img className='programmer' src='./images/programmer.png' alt='' />
	        <div className='contacts'>
	          <div className='footer-info'>
	            <div className='text'>
	              <strong>NZ MOBILE </strong> +64 - 210 817 3338
	            </div>
	            <div className='icon'>
	              <i className='fas fa-mobile'></i>
	            </div>
	          </div>
	          <div className='footer-info'>
	            <div className='text'>
	              <a href='mailto:albasychris@gmail.com'>
	                <button className='ui button blue'>
	                  <strong>EMAIL </strong> chris.alba.dev@gmail.com
	                </button>
	              </a>
	            </div>
	            <div className='icon'>
	              <i className='far fa-envelope'></i>
	            </div>
	          </div>
	          <div className='footer-info'>
	            <div className='text'>
	              <a
	                href='https://github.com/christopher-alba?tab=repositories'
	                target='_blank' rel="noopener noreferrer" >
	                <button className='ui button yellow'>
	                  <strong>VIEW MORE OF MY WORK ON GITHUB</strong>
	                </button>
	              </a>
	            </div>
	            <div className='icon'>
	              <i className='fab fa-github'></i>
	            </div>
	          </div>
	        </div>
	        <div className='credit'>
	          <div className='text'>
							ONLINE PORTFOLIO DESIGNED AND MADE BY CHRISTOPHER SY ALBA
	          </div>
	        </div>
	      </div>
	    </VisibilitySensor>
	  )
	}
}

const mapDispatchToProps = {
  updateNav
}

export default connect(undefined, mapDispatchToProps)(Footer)
