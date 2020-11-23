import React from 'react'
import { connect } from 'react-redux'


import Converter from './Converter'
import Result from './Result'

import { fetchNouns } from '../actions'

import { setDepositQuantity } from '../actions/index'
import { setDepositType } from '../actions/index'
import { addConcreteNounsAPI } from '../apis/concreteNouns'

export class App extends React.Component {
  state = {
    concreteNouns: [],
    depositType: '',
    depositQuantity: '',
    converterView: true 
    
  }

  componentDidMount () {
    this.props.dispatch(fetchNouns())
  }


  handleSubmit = (e) => {
    console.log('click')
    e.preventDefault()
    addConcreteNounsAPI(this.state)
        this.props.dispatch(setDepositType(this.state.depositType))
        this.props.dispatch(setDepositQuantity(this.state.depositQuantity))
        console.log('got to set state')
            this.setState({
              converterView: false
        })
    }
    
  render () {
    let resultState  = this.state.resultView
    let converterState = this.state.converterView
    return (
      <div className='app'>
        <div className='logo-container'>
          <img id="logo" src="/images/bocLogo.png"></img>
        </div>
          <h1>BANK OF CHAOS CURRENCY CONVERTER</h1>
            {converterState ? <Converter /> : <Result /> }
          <button className="button" value="convert" id="convertButton" onClick={this.handleSubmit}>CONVERT</button>    
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
