import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateNav } from '../actions/index'
import VisibilitySensor from 'react-visibility-sensor'

let groupProjects = [
  {
    title: 'PennyWise',
    imgUrl: '/images/pennywise.png',
    description: 'This is a money management app that is designed to allow users to plan well ahead into the future to achieve their financial goals. This was my final project in the EDA bootcamp, which I built along side 5 other team members. We built this project in an agile environment within a week and used Github projects to manage our workflow.',
    href: 'http://pennywise-eda.herokuapp.com/#/',
    tags: [
      'HTML',
      'CSS',
      'Javascript',
      'React.js',
      'Redux',
      'Node.js',
      'Express.js',
      'Knex.js',
      'Passport.js',
      'Semantic-UI-React',
      'Other React Libraries',
      'Desktop'
    ]
  }
]

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
            {groupProjects.map((project) => {
              return (
                <div key = {project.title} className='gallery-item' >
                  <div className='gallery-item-img'>
                    <img src={project.imgUrl} alt='' />
                  </div>
                  <div className='gallery-item-title'>
                    <h2>{project.title}</h2>
                    <a href={project.href} target='_blank' rel="noopener noreferrer" >
                      <button className='ui button'>visit</button>
                    </a>
                  </div>
                  <div className='gallery-item-description'>
                    {project.description}
                  </div>
                  <div className='gallery-item-tags'>
                    {project.tags.map(tag => {
                      return (
                        <div className='gallery-item-tag'>#{tag}</div>
                      )
                    })}
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
