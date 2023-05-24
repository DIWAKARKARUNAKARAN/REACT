import React,{Component}from 'react'
class Counter extends Component{
    constructor()
    {
        super()
        this.state={
            count:0
        }
    }
    incr()
    {
        this.setState({
            count:this.state.count+1
        })
    }
    render()
    {
        return(
            <div>
                <h1>count-{this.state.count}</h1>
                <button onClick={()=>this.incr()}>CLICK</button>
            </div>
        )
    }
}
export default Counter
/* <R7 names="SRM"city="GUDUVANCHERI"/> 
      <R8 names="SRM"city="GUDUVANCHERI"/>*/