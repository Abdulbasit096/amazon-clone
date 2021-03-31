import React, {useState} from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
    const [email,setEmail] = useState('');
    const [password , setPassword] = useState('');
    const history = useHistory();

const signIn = e =>{
    e.preventDefault();
    auth.signInWithEmailAndPassword(email,password)
    .then((auth)=>{ 
      if(auth){
        history.push('/');
      }
    }).catch(error => alert(error.messege));
}

const register = e =>{
    e.preventDefault();
     auth.createUserWithEmailAndPassword(email, password)
     .then((auth)=>{
       if(auth){
         history.push('/');
       }
     }).catch(error => alert(error.messege));
}


  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/640px-Amazon_logo.svg.png"
        />
      </Link>
      <div className="login_container">
        <h1>Sign In</h1>
        <form>
          <h5>Email</h5>
          <input type="text" value={email} onChange={e=>setEmail(e.target.value)}/>
          <h5>Password</h5>
          <input type="password" value={password} onChange={e=>setPassword(e.target.value)} />
          <button type= 'submit' onClick={signIn} className="sign_in_btn">Sign In</button>
        </form>
        <button onClick={register} className="register_btn">Create your Amazon account</button>
      </div>
    </div>
  );
}

export default Login;
