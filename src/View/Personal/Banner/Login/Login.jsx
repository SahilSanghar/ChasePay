import React from 'react';
import { Form, Button } from 'react-bootstrap';
import '../../../../scss/Login/Login.scss'

const LoginForm = () => {
return (
    <div className="login-form">
        <h2>Welcome</h2>
        <Form>
        <Form.Group controlId="formUsername">
            <Form.Control type="text" placeholder="Username" />
        </Form.Group>
        <Form.Group controlId="formPassword" className='mt-2'>
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formRememberMe" className="remember-me mt-2">
            <Form.Check type="checkbox" label="Remember me" />
            <span className="token">Token</span>
        </Form.Group>
        <Button variant="primary" type="submit" className='mt-2 Lbutton p-2'>
            <b>Sign In</b>
        </Button>
    </Form>
    </div>
);
}

export default LoginForm;
