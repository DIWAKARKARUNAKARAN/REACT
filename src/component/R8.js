import React,{Component}from 'react'
class R8 extends Component{
    render(){
        const {names,city}=this.props
        return<div>
            <h1>hai{names}from{city}</h1>
        </div>
    }
}
export default R8