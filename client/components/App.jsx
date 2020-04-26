import React from 'react'
import About from './About'
import Group from './Group'
import Personal from './Personal'
import Navbar from './Navbar'
import Footer from './Footer'
import Header from './Header'
const App = () => {
	return (
		<>
			<Navbar />
			<Header />

			<div className='whitespace'>
				<img className='gears' src='/images/settings-gears.png' alt='' />
				<About />
				<Personal />
			</div>

			<div className='coloredspace'>
				<Group />
			</div>

			<Footer />
		</>
	)
}

export default App
