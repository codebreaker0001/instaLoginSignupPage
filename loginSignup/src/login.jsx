import { useState } from "react"
import { Image } from "./img";
export function Login(props){
    const [email,setEmail ] = useState('');
    const [pass,setPass] = useState('');

    const handleSubmit  = (e) =>{
        e.preventDefault();
        console.log(e);
    }
    return(
        <div className="main1">
            <div className="main">
                <form action="" onSubmit={handleSubmit} className="">
                    <Image/>
                    <input type="email" placeholder="email" id="email" onChange = {(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="password"  id="password" onChange = {(e) =>{setPass(e.target.value)}}/>
                    <button type="submit">Login</button>
                </form>
                <p>Don't have an account? &nbsp; &nbsp;  <button onClick={() =>{props.onFormSwitch('register')}} > Register here</button></p>
            </div>
        </div>
    )
}