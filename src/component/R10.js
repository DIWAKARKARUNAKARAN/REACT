import React,{Component}from 'react'
class R10 extends Component{
    constructor(){
        super()
        this.state={
            msg:'welcome'
        }
    }
    dispmsg()
    {
        this.setState({msg:'THANK YOU'})
    }
    render(){
        return(
            <div><h1>{this.state.msg}</h1>
            <button onClick={()=>this.dispmsg()}>SUBMIT</button>
            </div>
        )
    }
    }
    export default R10
        
    
