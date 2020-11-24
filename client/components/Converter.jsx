import React from 'react'
import { connect } from 'react-redux'

import { addConcreteNounsAPI } from '../apis/concreteNouns'

import { setDepositQuantity } from '../actions/index'
import { setDepositType } from '../actions/index'
import { fetchNouns } from '../actions/index'

class Converter extends React.Component {
    state = {
        concreteNouns: [],
        depositType: '',
        depositQuantity: '',
        converterView: true,
        resultView: false
    }
componentDidMount () {
        this.props.dispatch(fetchNouns())
      }
    
handleTypeChange = (e) => {
    this.setState({
        depositType: e.target.value
    })
}

handleQuantityChange = (e) => {
    this.setState({
        depositQuantity: e.target.value
    })
}

handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
        depositType: this.props.depositType,
        converterView: false,
        resultView: true
  })
    this.convertedQuantity = Math.floor(Math.random()*40 + 1)
    this.convertedQuantityInput = document.getElementById('convertedQuantity')
    this.convertedQuantityInput.value = this.convertedQuantity
    this.randomNoun = this.props.concreteNouns[Math.floor(Math.random() * this.props.concreteNouns.length)]
    this.convertedTypeInput = document.getElementById('convertedType')
    this.convertedTypeInput.value = this.randomNoun
    this.props.dispatch(setDepositType(this.props.depositType))
    this.props.dispatch(setDepositQuantity(this.props.depositQuantity))
    addConcreteNounsAPI(this.state)
}

  handleReset = (e) => {
    e.preventDefault()
    // Make this re-render App rather than just reloading '/'
     window.location = '/' 
  }

render() {
let converterState = this.state.converterView
    return (
        <div className=''>
            <div className={!converterState ? 'hidden' : ''}>

                <label name='depositQuantity'>Find The Current Chaos Conversion for</label>
                    <input className="depositQuantity" type='number' name='depositQuantity' onChange={this.handleQuantityChange}/>
                <label name='depositType'>Unit(s) Of</label>
                    <input type="text" className="depositType" name="depositType" size="20" onChange={this.handleTypeChange} />
            </div>           
            <div className={converterState ? 'hidden' : ''}>
             <label name="convertedQuantity">We Can Currently Offer You</label>
                 <input className="" id="convertedQuantity" type="text" size="2"/>
             <label name="convertedType">Unit(s) of</label>
                 <input className="convertedType" id="convertedType" type="text"/>  
            </div>
            <div>  
                {converterState ? <button className="button" value="convert" id="convertButton" onClick={this.handleSubmit}>CONVERT</button> :
                <button className="new-conversion-button" value="reset" id="reset" onClick={this.handleReset}>New Conversion</button>}
            </div>
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
      resultView: globalState.resultView

    }
  }


export default connect(mapStateToProps)(Converter)