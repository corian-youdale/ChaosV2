import React from 'react'
import { connect } from 'react-redux'

export class Result extends React.Component {
    state = {
        depositType: '',
        depositQuantity: '',
    }
    componentDidMount(){
    this.convertedQuantity = Math.floor(Math.random()*40 + 1)
    this.convertedQuantityInput = document.getElementById('convertedQuantity')
    this.convertedTypeInput = document.getElementById('convertedType')
    this.convertedQuantityInput.value = this.convertedQuantity
    this.convertedTypeInput.value = this.props.concreteNouns[Math.floor(Math.random() * this.props.concreteNouns.length)]
}

render() {
    return (
        <div>
            <div className=''>
                <label name="convertedQuantity">We Can Currently Offer You</label>
                    <input className="" id="convertedQuantity" type="text" size="2" />
                <label name="convertedType">Unit(s) of</label>
                    <input className="convertedType" id="convertedType" type="text"/>  
                <br/>
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
    }
  }
    
export default connect(mapStateToProps)(Result)