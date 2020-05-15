import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateNav } from '../actions/index'
import VisibilitySensor from 'react-visibility-sensor'
import { Spring } from 'react-spring/renderprops'

let personalProjects = [
  {
    title: '2D Space Shooter',
    imgUrl: './images/galaga.png',
    description:
'I made this classic style shooter during the foundations section of the Enspiral Dev Academy bootcamp and was not part of the curiculum. Play until you die as there are infinite rounds and enemies. HAVE FUN!',
    href: `https://christopher-alba.github.io/galaga-clone/`,
    tags: ['HTML', 'CSS', 'Javascript', 'jQuery', 'Desktop', 'Game']
  },
  {
    title: 'Basic Scientific Calculator',
    imgUrl: './images/calculator.png',
    description:
'This project is an extension of an exercise during foundations at EDA. It has basic arithmetic operations, stored temporary memory and other basic functions of a scientific calculator. It also has an ON/OFF button.',
    href: `https://christopher-alba.github.io/calculator/`,
    tags: ['HTML', 'CSS', 'Javascript', 'jQuery', 'Desktop', 'Mobile']
  },
  {
    title: 'PvP Chess with Assists',
    imgUrl: './images/chess.png',
    description:
'I made this during the last week of foundations at EDA and was not part of the curiculum. It features chess with all the computer assists that prevent any illegal moves based on the original rules of classic chess. Unfortunately, there is no AI (yet).',
    href: `https://christopher-alba.github.io/chess/`,
    tags: ['HTML', 'CSS', 'Javascript', 'jQuery', 'Desktop', 'Game']
  },
  {
    title: 'Dress the Clown',
    imgUrl: './images/clown.png',
    description:
'This was an extension of an exercise during sprint 5 of foundations at EDA. It features the ability to change the attire of the clown and save it as an image. Have fun mixing and matching!',
    href: `https://christopher-alba.github.io/javascript-carnival/dress-the-clown/dress-the-clown.html`,
    tags: ['HTML', 'CSS', 'Javascript', 'Desktop', 'Mobile', 'Game']
  },
  {
    title: 'Whack-a-Mole',
    imgUrl: './images/mole.png',
    description:
'This was an extension of an exercise during sprint 5 of foundations at EDA. It is similar to one of those games at a carnival where you smack things that pop out. Have fun clicking moles!',
    href: `https://christopher-alba.github.io/javascript-carnival/whack-a-mole/whack-a-mole.html`,
    tags: ['HTML', 'CSS', 'Javascript', 'Desktop', 'Mobile', 'Game']
  },
  {
    title: 'EDA Foundations Personal Blog',
    imgUrl: './images/blog.png',
    description:
'I created this blog as part of the EDA foundations curiculum and it contains my reflections on my learning and on myself. If you want to know more about my experience during foundations or you want to know more about me, feel free to visit my blog.',
    href: `https://christopher-alba.github.io/`,
    tags: [
      'HTML',
      'CSS',
      'Bootstrap',
      'Javascript',
      'jQuery',
      'Desktop',
      'Mobile',
      'Blog'
    ]
  },
  {
    title: 'To do List with Persisting Memory',
    imgUrl: './images/list.png',
    description: `I made this to do list when I was learning from an online bootcamp from Udemy. It features the ability to add and delete lists, as well as ability to add and delete items within a list. Feel free to leave a nice message if you visit ❤.`,
    href: `https://cryptic-shore-73893.herokuapp.com/`,
    tags: [
      'HTML',
      'CSS',
      'Javascript',
      'jQuery',
      'EJS',
      'Express',
      'MongoDB',
      'Mongoose',
      'Mobile',
      'Desktop'
    ]
  },
  {
    title: 'Small Scale E-Commerce Site',
    imgUrl: './images/janzart.png',
    description: `This is a long term project of mine that I began during week 5 of the EDA bootcamp for my personal project presentation in week 7 and is still a work in progress. It is an e-commerce website and all the data inside the postgreSQL database is just seed data.The payment system is running in test mode so no real payments can be processed, only tested. Enjoy your visit ❤.`,
    href: `https://janzart.herokuapp.com/#/`,
    tags: [
      'HTML',
      'CSS',
      'Javascript',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'SQL3',
      'Knex.js',
      'React.js',
      'React-Redux',
      'Semantic-UI-React',
      'Auth0',
      'Stripe',
      'Other React npm Libraries',
      'Desktop',
      'Mobile',
      'eCommerce'
    ]
  }
]
class Personal extends Component {
onChange = visible => {
  console.log('testing 1')

  if (visible) {
    console.log('personal projects visible')

    this.props.updateNav('solo')
  } else {
    console.log(visible)
  }
}
render () {
  return (
  // <div>Testing Hello</div>
  // className='personal container's
    <div className='personal container' style={this.props.styles}>
      <h1>MY PERSONAL PROJECTS</h1>
      <div className='gallery'>
        {personalProjects.map(project => {
          return (
            <VisibilitySensor key={project.title}partialVisibility={false}>
              {
                <Spring
                  config={{ duration: 100 }}
                  from={{
                    opacity: 0,
                    transform: 'translateY(300px)'
                  }}
                  to={{
                    opacity: 1,
                    transform: 'translateY(0)'
                  }}>
                  {props => {
                    return (
                      <div className='gallery-item' style={props}>
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
                  }}
                </Spring>
              }
            </VisibilitySensor>
          )
        })}
      </div>
    </div>
  )
}
}
const mapDispatchToProps = {
  updateNav
}
export default connect(undefined, mapDispatchToProps)(Personal)
