import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Footer extends Component {
	render() {
		return (
			<div className='footer'>
				<img className='contact-me' src='./images/contact-me.png' alt='' />
				<img className='programmer' src='./images/programmer.png' alt='' />
				<div className='contacts'>
					<div className='footer-info'>
						<div className='text'>
							<strong>NZ MOBILE </strong>+64 - 021 1711 211
						</div>
						<div className='icon'>
							<i className='fas fa-mobile'></i>
						</div>
					</div>
					<div className='footer-info'>
						<div className='text'>
							<Link to='/'>
								<button className='ui button blue'>
									<strong>EMAIL </strong> albasychris@gmail.com
								</button>
							</Link>
						</div>
						<div className='icon'>
							<i className='far fa-envelope'></i>
						</div>
					</div>
					<div className='footer-info'>
						<div className='text'>
							<Link to='/'>
								<button className='ui button yellow'>
									<strong>VIEW MORE OF MY WORK ON GITHUB</strong>
								</button>
							</Link>
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
		)
	}
}

export default Footer
