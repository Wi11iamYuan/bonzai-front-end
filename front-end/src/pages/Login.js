import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import { login } from '../services/api.service';
import { useNavigate } from 'react-router-dom';


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
        console.log(token)
        console.log(res);
        localStorage.setItem("token", token);
        navigate("/home");
      }catch(e){
        console.log(e);
      }
    }
    return(
    <>
    <div>


      <Form onSubmit={onSubmit}>
        <Form.Group>
        <Form.Label htmlFor="inputPassword5">Password</Form.Label>
      <Form.Control
        type="password"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Form.Text id="passwordHelpBlock" muted>
        Your password must be 8-20 characters long, contain letters and numbers,
        and must not contain spaces, special characters, or emoji.
    </Form.Text>
        </Form.Group>

        <Form.Group>
        <Form.Label htmlFor="username">Email</Form.Label>
      <Form.Control
        type="text"
        id="username"
        // aria-describedby="passwordHelpBlock"
        onChange={(e) => setUsername(e.target.value)}
      />
      <Form.Text muted>
        Your password must be 8-20 characters long, contain letters and numbers,
        and must not contain spaces, special characters, or emoji.
    </Form.Text>
        </Form.Group>
      

    <div>
    <Button type="submit">Login</Button>
    <a href="/register">
    <Button type="submit">Register</Button>
    </a>
    </div>
      </Form>
      
    </div>
    
    </>
    );
}