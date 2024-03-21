// Login.js
import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { getAuth, signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import { auth } from '../firebase/FirebaseConfig.js';

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [confirmationResult, setConfirmationResult] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const appVerifier = new RecaptchaVerifier('recaptcha-container');
      const confirmation = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
      setConfirmationResult(confirmation);
    } catch (error) {
      console.error('Login error:', error);
      // Handle login error
    }
  };

  const handleVerifyCode = async () => {
    try {
      const userCredential = await confirmationResult.confirm(verificationCode);
      // User signed in successfully
      console.log('User signed in:', userCredential.user);
      // Redirect to dashboard or desired page upon successful login
    } catch (error) {
      console.error('Verification error:', error);
      // Handle verification error
    }
  };

  return (
    <Container>
      <h2>Login</h2>
      <Form onSubmit={handleLogin}>
        <Form.Group controlId="formBasicPhoneNumber">
          <Form.Label>Phone number</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Enter phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </Form.Group>

        <div id="recaptcha-container"></div>

        <Button variant="primary" type="submit">
          Get Verification Code
        </Button>
      </Form>

      {confirmationResult && (
        <Form onSubmit={handleVerifyCode}>
          <Form.Group controlId="formBasicVerificationCode">
            <Form.Label>Verification code</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter verification code"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Verify Code
          </Button>
        </Form>
      )}
    </Container>
  );
};

export default Login;
