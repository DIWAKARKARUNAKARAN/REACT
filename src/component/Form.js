import React,{Component}from 'react'
class Form extends Component{
    constructor(props){
        super(props)
        this.state={
            sname:'',
            car:'',
            gender:'',
            addr:''
        }
    }
    nameHandler=(event)=>{
        this.setState({
            sname:event.target.value
        })
    }
   carhandler=(event)=>{
        this.setState({
            car:event.target.value
        })
    }
    genderHandler=(event)=>{
        this.setState({
            gender:event.target.value
        })
    }
    addrHandler=(event)=>{
        this.setState({
            addr:event.target.value
        })
    }
    submitHandler=(event)=>{
        alert(
            "Name:"+`${this.state.sname}`+
            "Car:"+`${this.state.car}`+
            "Gender:"+`${this.state.gender}`+
            "addr:"+`${this.state.addr}`
        )
    }
    render(){
        return(
            <form onSubmit={this.submitHandler}>
                <div>
                    <label>enter the name</label>
                    <input type="text"
                    value={this.state.sname}
                    onChange={this.nameHandler}></input>
                </div>
               <div>
               <label>choose the car</label>
                 <select value={this.state.car}onChange={this.carhandler}>
                    <option>hyndai</option>
                    <option>toyota</option>
                    </select>
        </div>   
                <div value={this.state.gender}onChange={this.genderHandler}>
                    <label>choose the gender</label>
                    <input type="radio"name="gender"value="male"/>Male
                    <input type="radio"name="gender"value="female"/>Female
                </div>
                <div>
                    <label>enter the address</label>
                    <textarea rows="3"
                    value={this.state.addr}
                    onChange={this.addrHandler}></textarea>
                </div>
                <div>
                    <button>SUBMIT</button>
                </div>
                </form>
        )
    }
}
export default Form