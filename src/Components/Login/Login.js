import React,{useState,useContext} from 'react';
import { Context } from '../../Context/Context';
import Logo from '../../olx-logo.png';
import './Login.css';
import { useHistory } from 'react-router-dom';
function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {firebase} = useContext(Context)
  const history =useHistory()
  const handleLogin = (e)=>{
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
    history.push('/')
    }).catch((error)=>{
      alert(error.message)
    })
  }

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
            
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a className='signuplink' href='/signup'>Signup</a>
      </div>
    </div>
  );
}

export default Login;
