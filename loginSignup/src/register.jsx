import { useState } from "react";
import {Image} from "./img";
export function Signup(props){

    const [email,setEmail ] = useState('');
    const [pass,setPass] = useState('');
    const [mobileNumber,setMbileNumber] = useState('');
    const [FullName, setFullName] = useState('')
    
    const handleSubmit  = (e) =>{
        e.preventDefault();
        console.log(e);
    }
    return(
        <div className="main1">
            <div className="main">
            
            <form action="" onSubmit={handleSubmit}>
                <Image/>
                <input type="number"  placeholder="Mobile number" id="number" onChange={(e) =>{setMbileNumber(e.target.value)}} />
                <input type="text" placeholder="Full Name" id="name" onChange={(e) =>{setFullName(e.target.value)}}/>
                <input type="email" placeholder="email" id="email" onChange = {(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="password"  id="password" onChange = {(e) =>{setPass(e.target.value)}}/>
                <button type="submit">SignUp</button>
            </form>
            <p>Already have an account? &nbsp; &nbsp;<button onClick={() =>{props.onFormSwitch('login')}}>  Login  here</button></p>
        
        </div>
        </div>
    )
    
}