import React, { Component } from 'react'
let aboutMe = [
	`Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
quasi officia harum commodi illo vitae? Enim quo sit consequatur,
atque ipsa blanditiis expedita nesciunt, mollitia vitae ducimus iure
error sunt, officiis iusto delectus temporibus optio nemo maxime.
Architecto voluptatem cupiditate mollitia dolor unde quod veniam?
Quos dicta asperiores fugiat et.`,
	`Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
quasi officia harum commodi illo vitae? Enim quo sit consequatur,
atque ipsa blanveniam?
Quos dicta asperiores fugiat et.`,
	`Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
quasi officia harum commodi illo vitae? Enim quo sit iis iusto delectus temporibus optio nemo maxime.
Architecto voluptatem cupiditate mollitia dolor unde quod veniam?
Quos dicta asperiores fugiat et.`,
]
class About extends Component {
	state = {
		currentIndex: 0,
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
	render() {
		return (
			<div className='about-section'>
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
								<i
									onClick={() => this.setIndex(index)}
									className={`fab fa-react ${
										this.state.currentIndex === index ? `visible` : `hidden`
									}`}></i>
							)
						})}
					</div>
				</div>
			</div>
		)
	}
}

export default About