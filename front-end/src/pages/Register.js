import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';

export const RegisterPage = () => {
    return(
        <>
        <div>
            <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>

      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
        </InputGroup>
        <Form.Label htmlFor="inputPassword5">Password</Form.Label>
        <Form.Control
            type="password"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
        />
        <Form.Text id="passwordHelpBlock" muted>
            Your password must be 8-20 characters long, contain letters and numbers,
            and must not contain spaces, special characters, or emoji.
        </Form.Text>    
        </div>
        <div>
        <Button>Register</Button>
        </div>
        </>
    );
}