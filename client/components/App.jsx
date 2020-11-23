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

import Converter from './Converter'

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
        <div>
          <img id="logo" src="/images/bocLogo.png"></img>
        </div>
        <h1>BANK OF CHAOS CURRENCY CONVERTER</h1>
        <div className='converter-portion'>
          <Converter />
                  <br/><br/>
          <label name="convertedQuantity">We Can Currently Offer You</label>
            <input className="" id="convertedQuantity" type="text" size="2"/>
          <label name="convertedType">Units of</label>
            <input className="convertedType" id="convertedType" type="text"/>  
        </div>
                <br/>
        <button className="button" value="reset" id="reset" >New Conversion</button>
        
        {/* <ul>
          {this.props.concreteNouns.map(concreteNouns => (
            <li key={concreteNouns}>{concreteNouns}</li>
          ))}
        </ul> */}
       </div>
    )
  }
}

function mapStateToProps (globalState) {
  return {
    concreteNouns: globalState.concreteNouns,
    depositQuantity: globalState.depositQuantity,
    depositType: globalState.depositType,
  }
}

export default connect(mapStateToProps)(App)
