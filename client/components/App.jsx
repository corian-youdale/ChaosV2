// import React from 'react'
// import { connect } from 'react-redux'

// import { fetchFruits } from '../actions'

// export class App extends React.Component {
//   state = {
//     fruits: []
//   }

//   componentDidMount () {
//     this.props.dispatch(fetchFruits())
//   }

//   render () {
//     return (
//       <div className='app'>
//         <h1>Fullstack Boilerplate - with Fruits!</h1>
//         <ul>
//           {this.props.fruits.map(fruit => (
//             <li key={fruit}>{fruit}</li>
//           ))}
//         </ul>
//       </div>
//     )
//   }
// }

// function mapStateToProps (globalState) {
//   return {
//     fruits: globalState.fruits
//   }
// }

// export default connect(mapStateToProps)(App)

import React from 'react'
import { connect } from 'react-redux'

import { fetchNouns } from '../actions'

export class App extends React.Component {
  state = {
    concreteNouns: []
  }

  componentDidMount () {
    this.props.dispatch(fetchNouns())
  }

  render () {
    return (
      <div className='app'>
        <h1>Fullstack Boilerplate - with concreteNouns!</h1>
        <ul>
          {this.props.concreteNouns.map(concreteNouns => (
            <li key={concreteNouns}>{concreteNouns}</li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps (globalState) {
  return {
    concreteNouns: globalState.concreteNouns
  }
}

export default connect(mapStateToProps)(App)
