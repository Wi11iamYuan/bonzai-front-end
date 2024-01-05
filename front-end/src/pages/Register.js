import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import { register } from '../services/api.service';
import { useNavigate } from 'react-router-dom';

import '../styles/Register.css';


export const RegisterPage = () => {
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const [username, setUsername] = useState("");

  const [isAnimated, setIsAnimated] = useState(false);
  const [isPasswordWork, setIsPasswordWork] = useState(true);
  const [isUsernameWork, setIsUsernameWork] = useState(true);

  const navigate = useNavigate();

    const onSubmit = async (e) => {    
      e.preventDefault();

      //tests if fits standard email formatting
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      //tests if password has at least one lowercase, one uppercase, one number, and is at least 8 long
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

      if(!emailRegex.test(username)){
        setIsUsernameWork(false);
        setTimeout(() => {
          setIsUsernameWork(true);
        }, 1000);
        return;
      }

      if(!passwordRegex.test(password1) || password1 != password2){
        setIsPasswordWork(false);
        setTimeout(() => {
          setIsPasswordWork(true);
        }, 1000);
        return;
      }

      try{
        let res = await register(username,password1);
        let text = await res.text();
        if(text == "Already exists." || res.status == 401 || res.status == 400){
          setIsAnimated(true);
          setTimeout(() => {
            setIsAnimated(false);
          }, 1000);
          return;
        }

        navigate("/login");
      }catch(e){

      }
    }

    const switchReg = (e) => {
      navigate("/login");
    }

    return(
    <>
    <div id='reg-page'>

    <svg id = "top-left-blob" class = "rotate" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="fill" x1="0%" y1="0%" x2="100%" y2="0%" gradientTransform="rotate(45 0.5 0.5)"><stop offset="0%" stop-color="#e647da"></stop><stop offset="100%" stop-color="#7affb3"></stop></linearGradient></defs><path d="M80.5,63.5Q77,77,63.5,83.5Q50,90,37,83Q24,76,12.5,63Q1,50,14.5,39Q28,28,39,15.5Q50,3,61,15.5Q72,28,78,39Q84,50,80.5,63.5Z" stroke="none" stroke-width="0" fill="url(#fill)"></path></svg>


    <svg id = "lower-left-blob1" class = "rotate" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="fill1" x1="0%" y1="0%" x2="100%" y2="0%" gradientTransform="rotate(45 0.5 0.5)"><stop offset="0%" stop-color="#47bbe6"></stop><stop offset="100%" stop-color="#7affb3"></stop></linearGradient></defs><path d="M80.5,64Q78,78,64,79Q50,80,34,81Q18,82,12.5,66Q7,50,11,32.5Q15,15,32.5,7.5Q50,0,63,12Q76,24,79.5,37Q83,50,80.5,64Z" stroke="none" stroke-width="0" fill="url(#fill1)"></path></svg>

    <svg id="lower-right-blob" class = "float" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="fill2" x1="0%" y1="0%" x2="100%" y2="0%" gradientTransform="rotate(45 0.5 0.5)"><stop offset="0%" stop-color="#c647e6"></stop><stop offset="100%" stop-color="#7affff"></stop></linearGradient></defs><path d="M89,65Q80,80,65,81Q50,82,35.5,80.5Q21,79,15.5,64.5Q10,50,14.5,34.5Q19,19,34.5,14.5Q50,10,61,19Q72,28,85,39Q98,50,89,65Z" stroke="none" stroke-width="0" fill="url(#fill2)"></path></svg> 

      <div id="reg-right-hold">
      </div>
      
      <div id='reg-title'>
        <h1>&lt; Join Bonzai &gt;</h1>
      </div>

      <div id='reg-right'>
        <div id = "reg-hold">
        <Form onSubmit={onSubmit}>
          <Form.Group>
            <Form.Label id="reg-email-hold" htmlFor="reg-email">Email Address</Form.Label>
            <Form.Control type="text" className = {isUsernameWork ? "reg-email-nothing" : "reg-email-animated-only"} id={isAnimated ? "reg-email-animated" : "reg-email"} placeholder='Enter email' onChange={(e) => setUsername(e.target.value)} />
          </Form.Group>

          <Form.Group>
            
            <Form.Label id="reg-password-hold" htmlFor="reg-password">Password</Form.Label>

            <Form.Control type="text" className = {isPasswordWork ? "reg-password-nothing" : "reg-password-animated-only"} id={isAnimated ? "reg-password-animated" : "reg-password"} placeholder='Enter password' onChange={(e) => setPassword1(e.target.value)} />
            
            <Form.Control type="text" className = {isPasswordWork ? "reg-password-nothing" : "reg-password-animated-only"} id={isAnimated ? "reg-password-animated" : "reg-password"} placeholder='Retype password' onChange={(e) => setPassword2(e.target.value)} />
            
        
          </Form.Group>
          <div id = "reg-password-req">
          Must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number.

          </div>


          <div>
            <Button id = {isAnimated ? "reg-button1-animated" : "reg-button1"} variant = 'primary' type="submit" className='reg-button'>Register</Button>
            
            <a href="/login">
              <Button id = "reg-button2" variant = 'secondary' type="submit" className='reg-button' onClick={switchReg}>Back</Button>
            </a>
          </div>
        </Form>

        </div>
      </div>
      
      
      
    </div>
    </>
    );
}