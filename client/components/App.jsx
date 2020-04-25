import React from 'react'
import About from './About'
import Group from './Group'
import Personal from './Personal'
import Navbar from './Navbar'
import Footer from './Footer'
import Header from './Header'
const App = () => {
	return (
		<div className='main'>
			<Navbar />
			<Header />

			<div className='whitespace'>
				<img className='gears' src='/images/gears-icon.png' alt='' />
				<About />
				<Personal />
			</div>

			<div className='coloredspace'>
				<Group />
			</div>

			<Footer />
		</div>
	)
}

export default App
