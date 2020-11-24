import React from 'react'
import { connect } from 'react-redux'

import Converter from './Converter'

import { fetchNouns } from '../actions/index'

export class App extends React.Component {
  state = {
    concreteNouns: [],
    depositType: '',
    depositQuantity: '',
    converterView: true,
  }

  componentDidMount () {
    this.props.dispatch(fetchNouns(this.state.concreteNouns))
  }

  render () {
    return (
      <div className='app converter'>
        <div className='logo-container'>
          <img id="logo" src="/images/bocLogo.png"></img>
        </div>
          <h1>BANK OF CHAOS CURRENCY CONVERTER</h1>
           <Converter />

       </div>
    )
  }
}

function mapStateToProps (globalState) {
  return {
    concreteNouns: globalState.concreteNouns,
    depositQuantity: globalState.depositQuantity,
    depositType: globalState.depositType,
    converterView: globalState.converterView,
    resultView: globalState.resultView,

  }
}

export default connect(mapStateToProps)(App)
