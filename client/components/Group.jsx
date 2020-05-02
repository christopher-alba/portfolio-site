import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateNav } from '../actions/index'
import VisibilitySensor from 'react-visibility-sensor'
class Group extends Component {
onChange = visible => {
  if (visible) {
    this.props.updateNav('group')
  }
}
render () {
  return (
    <VisibilitySensor
      onChange={visible => this.onChange(visible)}
      partialVisibility={true}
      offset={{ top: 500 }}>
      <div className='container'>
        <div className='group'>
          <img
            className='group-silhouette'
            src='/images/group-silhouette.png'
            alt=''
          />
          <h1>MY GROUP PROJECTS</h1>
          <div className='gallery'>
            {[1].map((id) => {
              return (
                <div key={id} className='gallery-item'>
                  <div className='gallery-item-img'>
                    <img src='/images/meditation.jpg' alt='' />
                  </div>
                  <div className='gallery-item-title'>
                    <h2>Meditation</h2>
                    <Link to='/'>
                      <button className='ui button '>visit</button>
                    </Link>
                  </div>
                  <div className='gallery-item-description'>
Lorem ipsum dolor sit amet, consectetur adipisicing elit.
Exercitationem debitis, illo molestiae fugit odio
cupiditate ad nemo nihil adipisci deleniti?
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
    </VisibilitySensor>
  )
}
}
const mapDispatchToProps = {
  updateNav
}

export default connect(undefined, mapDispatchToProps)(Group)
