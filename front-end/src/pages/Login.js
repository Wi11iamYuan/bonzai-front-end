import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import { login } from '../services/api.service';
import { useNavigate } from 'react-router-dom';

import '../styles/Login.css';


export const LoginPage = () => {
  const [password, setPassword] = useState(null);
  const [username, setUsername] = useState(null);
  const navigate = useNavigate();

    const onSubmit = async (e) => {
      console.log(password);
      console.log(username);
      
      e.preventDefault();
      try{
        let res = await login(username,password);
        let token = await res.text();
        if(token == "Not Authorized"){
          return;
        }
        console.log(token)
        console.log(res);
        localStorage.setItem("token", token);
        navigate("/home");
      }catch(e){
        console.log(e);
      }
    }

    const switchReg = (e) => {
      navigate("/register");
    }
    return(
    <>
    <div id='login-page'>

      <svg id="top-left-blob" xmlns="http://www.w3.org/2000/svg" width="200" height="200" 
      viewBox="-25 -25 250 250" class="rotate"> 
      <defs>
      <linearGradient id="lgrad1" x1="100%" y1="50%" x2="0%" y2="50%" >
        <stop offset="0%" style={{"stop-color":"#8affe2","stop-opacity":"1.00"}} />
        <stop offset="100%" style={{"stop-color":"#008EE6","stop-opacity":"1.00"}} />
      </linearGradient>
      </defs>
      <path d="M62.71142086321677 7.212275240957354 C26.651766919395754 16.661574576132452 -2.3206307724841544 112.98231073181611 11.95666134854008 147.4169855548024 C23.383834572047526 174.9776035460792 90.64083061599513 202.90323842240963 120.0652109204865 197.9662559798852 C146.58455897041895 193.5166956372422 198.08751394319998 149.97977915560122 197.29503875447864 123.10141627183283 C195.9865018283478 78.71979922196172 105.66213080270795 -4.042799905044676 62.71142086321677 7.212275240957354Z" stroke="none" fill="url(#lgrad1)"  />
      </svg>

      <svg id = "lower-left-blob" xmlns="http://www.w3.org/2000/svg" width="200" height="200" 
      viewBox="-25 -25 250 250" class="float"> 
      <defs>
      <linearGradient id="lgrad2" x1="0%" y1="0%" x2="100%" y2="100%" >
        <stop offset="0%" style={{"stop-color":"#ff8afb","stop-opacity":"1.00"}} />
        <stop offset="100%" style={{"stop-color":"#008EE6","stop-opacity":"1.00"}} />
      </linearGradient>
      </defs>
      <path d="M182.84760453097533 43.997549843965636 C160.26558355690145 10.813504217000151 49.284579578046205 7.013618390479511 22.450674141649003 36.86441527224689 C-2.307662487606386 64.40629059121841 18.32416204523997 157.3264424098172 44.703182800569216 183.3202376833668 C60.18930158259946 198.58020525136843 112.34907604017494 206.51322837131292 130.86468428378004 195.11767061941003 C164.8896519647954 174.17677150800466 205.32489922554518 77.02770128929903 182.84760453097533 43.997549843965636Z" stroke="none" fill="url(#lgrad2)"  />
      </svg>

      <svg id = "lower-right-blob" xmlns="http://www.w3.org/2000/svg" width="200" height="200" 
      viewBox="-25 -25 250 250" class="float"> 
      <defs>
      <linearGradient id="lgrad" x1="0%" y1="0%" x2="100%" y2="100%" >
        <stop offset="0%" style={{"stop-color":"#00fffb","stop-opacity":"1.00"}} />
        <stop offset="100%" style={{"stop-color":"#000fe6","stop-opacity":"1.00"}} />
      </linearGradient>
      </defs>
      <path d="M199.5939761450527 90.99778273875413 C199.08727006071453 75.9509513101547 187.96550552225727 45.03300036867883 176.36482413076214 35.436747019083924 C152.69746793246733 15.8587637498899 83.55475915319008 -3.7119313366250246 56.13671756806002 10.133362952117395 C27.77521009177738 24.455079412510525 -0.4815187628521773 94.21460644330018 3.372803201415536 125.75237540204067 C5.795532305390143 145.57621768587657 35.982886051589254 177.95440641314354 53.06498080718762 188.3012116189259 C65.65371208995981 195.9263391126189 96.3023347339692 201.43386224091972 110.87998847812642 199.40636725439592 C128.19340295587088 196.99837611471713 161.85772996382815 181.1600810532945 173.33978018161764 167.97997236621976 C186.69647546904218 152.64798093182884 200.27834087970083 111.32025589669716 199.5939761450527 90.99778273875413Z" stroke="none" fill="url(#lgrad)"  />
      </svg>  

      <div id="login-right-hold">
      </div>
      
      <div id='login-title'>
        <h1>&lt; Enter Bonzai &gt;</h1>
      </div>

      <div id='login-right'>
        <div id = "login-hold">
        <Form onSubmit={onSubmit}>
          <Form.Group>
            <Form.Label id="login-email-hold" htmlFor="login-email">Email Address</Form.Label>
            <Form.Control type="text" id="login-email" placeholder='Enter email' onChange={(e) => setUsername(e.target.value)} />
          </Form.Group>

          <Form.Group>
            <Form.Label id="login-password-hold" htmlFor="login-password">Password</Form.Label>
            <Form.Control type="password" id="login-password" placeholder='Enter password' onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>

          <div>
            <Button id = "login-button1" variant = 'primary' type="submit" className='login-button'>Login</Button>
            
            <a href="/register">
              <Button id = "login-button2" variant = 'secondary' type="submit" className='login-button' onClick={switchReg}>Register</Button>
            </a>
          </div>
        </Form>

        </div>
      </div>
      
      
      
    </div>
    </>
    );
}