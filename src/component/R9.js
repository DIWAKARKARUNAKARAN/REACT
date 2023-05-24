import React,{Component}from 'react'
class R9 extends Component{
    constructor()
    {
        super()
        this.state={
            msg:'this state method'
        }
    }
    render()
    {
        return <h1>{this.state.msg}</h1>
    }
}
export default R9