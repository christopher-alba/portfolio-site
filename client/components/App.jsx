import React from 'react'
import About from './About'
import Group from './Group'
import Personal from './Personal'
import Navbar from './Navbar'
import Footer from './Footer'
import Header from './Header'
import VisibilitySensor from 'react-visibility-sensor'
import { Spring } from 'react-spring/renderprops'
import { connect } from 'react-redux'
import { updateNav } from '../actions/index'
class App extends React.Component {
personalView = visible => {
  if (visible) {
    this.props.updateNav('solo')
  }
}

render () {
  return (
<>
<Spring
  config={{ duration: 800 }}
  delay={1200}
  from={{ transform: 'translateY(-100px)', opacity: 0 }}
  to={{ transform: 'translateY(0px)', opacity: 1 }}>
  {props => <Navbar styles={props} />}
</Spring>

<Header />
<Spring
  config={{ duration: 500 }}
  delay={300}
  from={{ transform: 'translateY(500px)', opacity: 0 }}
  to={{ transform: 'translateY(0px)', opacity: 1 }}>
  {props => (
    <div className='whitespace' style={props}>
      <img className='gears' src='/images/settings-gears.png' alt='' />
      <Spring
        config={{ duration: 800 }}
        delay={1100}
        from={{ transform: 'translateY(300px)', opacity: 0 }}
        to={{ transform: 'translateY(0px)', opacity: 1 }}>
        {props => <About styles={props} />}
      </Spring>

      <VisibilitySensor
        onChange={this.personalView}
        partialVisibility={true}
        offset={{ top: 500 }}>
        <Personal styles={null} />
      </VisibilitySensor>
    </div>
  )}
</Spring>

<div className='coloredspace'>
  <Group />
</div>

<Footer />
</>
  )
}
}
const MapDispatchToProps = {
  updateNav
}
export default connect(undefined, MapDispatchToProps)(App)
