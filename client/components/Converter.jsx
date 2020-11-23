import React from 'react'
import { connect } from 'react-redux'

class Converter extends React.Component {
    state = {
        depositType: '',
        depositQuantity: '',
        resultView: ''
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

render() {
    return (
        <div className=''>
            <label name='depositQuantity'>Find The Current Chaos Conversion for</label>
                <input className="depositQuantity" type='number' name='depositQuantity' onChange={this.handleQuantityChange}/>
            <label name='depositType'>Unit(s) Of</label> {/*make this have an s if quantity>1*/}
                <input type="text" className="depositType" name="depositType" size="20" onChange={this.handleTypeChange} />
            <br/>
        </div>
        )
    }   
}


export default connect()(Converter)