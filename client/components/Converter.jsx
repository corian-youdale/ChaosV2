import React from 'react'
import { connect } from 'react-redux'

import { setDepositQuantity } from '../actions/index'
import { setDepositType } from '../actions/index'
import { addConcreteNounsAPI } from '../apis/concreteNouns'

class Converter extends React.Component {
    state = {
        depositType: '',
        depositQuantity: '',
        converterView: true, 
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
    console.log('click')
    console.log(this.state)
    e.preventDefault()
    addConcreteNounsAPI(this.state)
        this.props.dispatch(setDepositType(this.props.depositType))
        this.props.dispatch(setDepositQuantity(this.props.depositQuantity))
        console.log('got to set state')
            this.setState({
              converterView: false
        })
    }

  handleReset = (e) => {
    e.preventDefault()
    console.log('handling reset')
     window.location = '/' 
  }

render() {
let converterState = this.state.converterView
    return (
        <div className=''>
            <label name='depositQuantity'>Find The Current Chaos Conversion for</label>
                <input className="depositQuantity" type='number' name='depositQuantity' onChange={this.handleQuantityChange}/>
            <label name='depositType'>Unit(s) Of</label> {/*make this have an s if quantity>1*/}
                <input type="text" className="depositType" name="depositType" size="20" onChange={this.handleTypeChange} />
                <br/>
            {converterState ? <button className="button" value="convert" id="convertButton" onClick={this.handleSubmit}>CONVERT</button> : 
                     <button className="new-conversion-button" value="reset" id="reset" onClick={this.handleReset}>New Conversion</button>  }
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


export default connect(mapStateToProps)(Converter)