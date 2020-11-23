import React from 'react'
import { connect } from 'react-redux'

// import any routes from 'react-router-dom'

export class Result extends React.Component {
    state = {
        depositType: '',
        depositQuantity: '',
    }
    componentDidMount(){
    this.convertedQuantity = Math.floor(Math.random()*40 + 1)
    this.convertedQuantityInput = document.getElementById('convertedQuantity')

    console.log(this.convertedQuantity)
    console.log(this.convertedQuantityInput)
    this.convertedQuantityInput.value = this.convertedQuantity
    console.log(this.props.concreteNouns)
    // this.convertedType.value = this.props.concreteNouns[Math.floor(Math.random() * this.props.concreteNouns.length)]
}



//  unitConverter () {
    // return convertedQuantity
// }

 convertedType = document.getElementById('convertedType')


render() {
    return (
        <div>
            <div className='result'>
                <label name="convertedQuantity">We Can Currently Offer You</label>
                    <input className="" id="convertedQuantity" type="text" size="2" />
                <label name="convertedType">Unit(s) of</label>
                    <input className="convertedType" id="convertedType" type="text"/>  
                <br/>
                    <button className="new-conversion-button" value="reset" id="reset" >New Conversion</button> {/*BUTTON REFRESHES HOMEPAGE*/}
            </div>
        </div>
        )
    }
}       

export default connect()(Result)