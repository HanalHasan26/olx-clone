import React, { useState,useContext } from 'react';
import { Context } from '../../Context/Context';
import Logo from '../../olx-logo.png';
import './Signup.css';
import { useHistory } from 'react-router-dom';
import SignupLoading from '../Loading/SignupLoading';

export default function Signup() {
  const history = useHistory()
  const  [Username, setUsername] = useState('')
  const  [Email, setEmail] = useState('')
  const  [Phone, setPhone] = useState('')
  const  [Password, setPassword] = useState('')
  const  [Loading, setLoading] =useState('')
  const {firebase} = useContext(Context)
 const handleSumbit=(e)=>{
   setLoading(true)
   e.preventDefault()
   firebase.auth().createUserWithEmailAndPassword(Email,Password).then((result)=>{
     result.user.updateProfile({displayName:Username}).then(()=>{
       firebase.firestore().collection('users').add({
         id:result.user.uid,
         username:Username,
         phone:Phone
       }).then(()=>{
          history.push('/login')
       })

     })
   })
 }

  return (
    
    <div>
      {Loading && <SignupLoading  size={550}/>}
      <div className="signupParentDiv">
      
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSumbit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="name"
            defaultValue="John"
            value={Username}
            onChange={(e)=>setUsername(e.target.value)}
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
            value={Email}
            onChange={(e)=>setEmail(e.target.value)}

          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            name="phone"
            defaultValue="Doe"
            value={Phone}
            onChange={(e)=>setPhone(e.target.value)}
           
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
            value={Password}
            onChange={(e)=>setPassword(e.target.value)}

          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a className='loginLink' href='/login'>Login</a>
      </div>
    </div>
    
  );
}
