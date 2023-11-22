import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';
import { useState, useEffect } from 'react';
import { register } from '../services/api.service';
import { useNavigate } from 'react-router-dom';

export const RegisterPage = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState(null);
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);

  const onSubmit = async (e) => {
    console.log(password);
    console.log(username);
    
    e.preventDefault();
    try{
      let res = await register(username,password,email);
      
      navigate("/login");
    }catch(e){
      console.log(e);
    }
  }
    return(
      <>
      <div>
  
  
        <Form onSubmit={onSubmit}>
        <Form.Group>
          <Form.Label htmlFor="username">Username</Form.Label>
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
          <Form.Label htmlFor="inputPassword5">Email</Form.Label>
        <Form.Control
          type="text"
          id="inputPassword5"
          aria-describedby="passwordHelpBlock"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Text id="passwordHelpBlock" muted>
          Your password must be 8-20 characters long, contain letters and numbers,
          and must not contain spaces, special characters, or emoji.
      </Form.Text>
          </Form.Group>
        
      <div>
      <Button type="submit">Login</Button>
      
      </div>
        </Form>
        
      </div>
      
      </>
    );
}