// import React from 'react'
// import { connect } from 'react-redux'
// import { fetchNouns } from '../actions/index'


// export class Result extends React.Component {
//     state = {
//         concreteNouns: [],
//         depositType: '',
//         depositQuantity: '',
//         converterView: '',
//         resultView: true
//     }
    
//     componentDidMount(){
//         this.props.dispatch(fetchNouns())
//         console.log(this.props.concreteNouns)
//         this.convertedQuantity = Math.floor(Math.random()*40 + 1)
//         this.convertedQuantityInput = document.getElementById('convertedQuantity')
//         this.convertedQuantityInput.value = this.convertedQuantity
//         this.convertedTypeInput = document.getElementById('convertedType')
//      // this.convertedTypeInput.value = this.props.concreteNouns[Math.floor(Math.random() * this.props.concreteNouns.length)]
// }

// render() {
//     return (
//         <div>
//             {/* <div className=''>
//                 <label name="convertedQuantity">We Can Currently Offer You</label>
//                     <input className="" id="convertedQuantity" type="text" size="2" />
//                 <label name="convertedType">Unit(s) of</label>
//                     <input className="convertedType" id="convertedType" type="text"/>  
//                 <br/>
//             </div> */}
//         </div>
//         )
//     }
// }       

// function mapStateToProps (globalState) {
//     return {
//       concreteNouns: globalState.concreteNouns,
//       depositQuantity: globalState.depositQuantity,
//       depositType: globalState.depositType,
//       converterView: globalState.converterView
//     }
//   }
    
// export default connect(mapStateToProps)(Result)