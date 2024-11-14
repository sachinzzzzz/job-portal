import React, { useState} from 'react'
import axios from 'axios'
import {useNavigate } from 'react-router-dom'




const Login = () => {
   
  
  const navigate = useNavigate();
  const [toggleLogin, settoggleLogin] = useState('signup');
  
  const initialSignup = {
    username: "",
    email: "",
    password: ""
  }
  const initialLogin = {
    email: "",
    password: ""
  }
  
  const [signup, setSignup] = useState(initialSignup);
  const [login, setLogin] = useState(initialLogin);


  const handleChangeSignup = (e) => {
    e.preventDefault();
    setSignup({ ...signup, [e.target.name]: e.target.value });

  }
  const handleChangeLogin = (e) => {
    e.preventDefault();
    setLogin({ ...login, [e.target.name]: e.target.value });

  }

  function handletoggle(){
    toggleLogin === 'signup' ? settoggleLogin('login') : settoggleLogin('signup');
  }

  function handleSignup(e){
    e.preventDefault();
    console.log(signup);
  }

  async function handleLogin(e){
    e.preventDefault();
    console.log(login);
    try{
      const response = await axios.post('http://localhost:8000/login', login);
      navigate('/');
      return response.data;
    }catch(error){
      alert('error from frontend');
    }
  }




  return (
    <div>

      {toggleLogin === 'login' ?
        <>
          <h5>Enter Your email:</h5>
          <input type="email" name="email" placeholder='email' onChange={handleChangeLogin}></input>
          <h5>Password:</h5>
          <input type="email" name="password" placeholder='Password' onChange={handleChangeLogin}></input>
          <button className="btn btn-primary" onClick={handleLogin}>Login</button>
          <button onClick={handletoggle}>Create a account</button>
        </>
        :
        <>
          
            <h5>Enter Your Name:</h5>
            <input type="text" name="name" placeholder='Full Name' onChange={handleChangeSignup}></input>
            <h5>Enter Your email:</h5>
            <input type="email" name="email" placeholder='Full Name' onChange={handleChangeSignup}></input>
            <h5>Password:</h5>
            <input type="email" name="password" placeholder='Full Name' onChange={handleChangeSignup}></input>
            <button className="btn btn-primary" onClick={handleSignup}>Sign Up</button>
            <button className="btn btn-primary" onClick={handletoggle}>i have an account</button>
         
        </>
      }


    </div>
  )
}

export default Login;