import React,{useState} from 'react'
function Login() {
    const[email,setEmail]=useState("")
    const[pass,setPass]=useState("")
    function submitHandler()
    {
        if(email==="diwa.123" & pass==="123")
        {
            alert("success")
        }
        else{
            alert("failed")
        }
    }
  return (
    <form onSubmit={submitHandler}>
        <div>
            <label htmlfor="email">EMAIL</label>
            <input type="text"value={email}onChange={(e)=>setEmail(e.target.value)}>
            </input>
        </div>
        <div>
            <label htmlfor="pass">PASSWORD</label>
            <input type="password"value={pass}onChange={(e)=>setPass(e.target.value)}></input>
        </div>
        <div>
        <button>SUBMIT</button>
        </div>
    </form>
  )
}
export default Login