import React,{useState} from 'react';
import {auth} from "./firebase";
import {useHistory} from "react-router-dom";

const Login = (props) => {
	const [email,setEmail] = useState("")
	const [password,setPassword] = useState("")
	const history = useHistory()

	const login = async (e)=>{
		e.preventDefault();
		auth.signInWithEmailAndPassword(email,password)
		.then(auth=>{
			history.push("/")
		})
		.catch(err=>{
			alert(err.message)
		})
	}

	const signup = async (e)=>{
		e.preventDefault();
		auth.createUserWithEmailAndPassword(email,password)
		.then(auth=>{
			history.push("/")
		})
		.catch(err=>{
			alert(err.message)
		})
	}


  return (
    <div>
    	<div>
    		<h2>Sign in</h2>
    		<form action="">
    			<label htmlFor="email">E-mail</label>
            	<input value={email} onChange={e=> setEmail(e.target.value)} type="email" id="email" />
    			<label htmlFor="password">Password</label>
    			<input value={password} onChange={e=> setPassword(e.target.value)} type="password" id="password" />
    			<button onClick={e=> login(e)} >Sign In</button>
    			<button onClick={e=> signup(e)} >Create an account</button>
    		</form>
    	</div>
    </div>
  )
}

export default Login;