import React from 'react'
import { connect } from 'react-redux'

// import any routes from 'react-router-dom'


import { setDepositQuantity } from '../actions/index'
import { setDepositType } from '../actions/index'

class Converter extends React.Component {
    state = {
        depositType: '',
        depositQuantity: ''   
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

// Write the action(?) for setDepositType

handleClick = () => {
    console.log(setDepositType(this.state.depositType))
    this.props.dispatch(setDepositType(this.state.depositType))
    this.props.dispatch(setDepositQuantity(this.state.depositQuantity))
    // this.props.history.push('/home')
}

render() {
    return (
        <div className='converter'>
            <label name='depositQuantity'>Find The Current Chaos Conversion for</label>
                <input className="depositQuantity" type='number' name='depositQuantity' onChange={this.handleQuantityChange}/>
            <label name='depositType'>Unit(s) Of</label> {/*make this have an s if quantity>1*/}
                <input type="text" className="depositType" name="depositType" size="20" onChange={this.handleTypeChange} />
            <br/>
                <button className="button" value="convert" id="convertButton" onClick={this.handleClick}>CONVERT</button>
        </div>
        )
    }   
}


export default connect()(Converter)