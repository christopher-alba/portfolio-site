import React, { Component } from 'react'
import { Link } from 'react-router-dom'
let personalProjects = []
class Personal extends Component {
	render() {
		return (
			<div className='container'>
				<div className='personal'>
					<h1>MY PERSONAL PROJECTS</h1>
					<div className='gallery'>
						{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(() => {
							return (
								<div className='gallery-item'>
									<div className='gallery-item-img'>
										<img src='/images/meditation.jpg' alt='' />
									</div>
									<div className='gallery-item-title'>
										<h2>Meditation</h2>
										<Link to='/'>
											<button className='ui button'>visit</button>
										</Link>
									</div>
									<div className='gallery-item-description'>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit.
										Exercitationem debitis, illo molestiae fugit odio cupiditate
										ad nemo nihil adipisci deleniti?
									</div>
									<div className='gallery-item-tags'>
										<div className='gallery-item-tag'>#react.js</div>
										<div className='gallery-item-tag'>#react.js</div>
										<div className='gallery-item-tag'>#react.js</div>
									</div>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		)
	}
}

export default Personal
