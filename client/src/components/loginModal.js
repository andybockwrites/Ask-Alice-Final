import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

import { useMutation } from "@apollo/client";
import { LOGIN_USER, ADD_USER } from "../utils/mutations";

import Auth from "../utils/auth";

function LoginModal(props) {
  const [userFormData, setUserFormData] = useState({ email: "", password: "" });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [signingUp, setSigningUp] = useState(false);
  

  // declaring loginUser with useMutation || both currently undefined   
  const [loginUser, { error }] = useMutation(LOGIN_USER);
  const [addUser, { error: addError }] = useMutation(ADD_USER);


  useEffect(() => {
    if (error || addError) setShowAlert(true);
    else setShowAlert(false);
  }, [error, addError]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    // use loginUser function || not yet defined
    if(!signingUp){
      try {
        const { data } = await loginUser({
          variables: { ...userFormData },
        });
  
        Auth.login(data.login.token);
      } catch (e) {
        console.error(e);
      }
    } else {
      try {
        const { data } = await addUser({
          variables: { ...userFormData },
        });

        Auth.login(data.addUser.token);
      } catch (e) {
        console.error(e);
      }
    }

    setUserFormData({
      username: "",
      email: "",
      password: "",
    });
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
            <Modal.Title>{!signingUp ? 'Log In' : 'Sign Up'}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
              <Alert
                dismissible
                onClose={() => setShowAlert(false)}
                show={showAlert}
                variant="danger"
              >
                Something went wrong with your login credentials!
              </Alert>
              {signingUp ? (
                <Form.Group className="mb-3">
                <Form.Label htmlFor="username">Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Your username"
                  name="username"
                  id="username"
                  onChange={handleInputChange}
                  value={userFormData.username}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Email is required!
                </Form.Control.Feedback>
              </Form.Group>
              ): <></>}
              <Form.Group className="mb-3">
                <Form.Label htmlFor="email">Email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Your email"
                  name="email"
                  id="email"
                  onChange={handleInputChange}
                  value={userFormData.email}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Email is required!
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label htmlFor="password">Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Your password"
                  name="password"
                  id="password"
                  onChange={handleInputChange}
                  value={userFormData.password}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Password is required!
                </Form.Control.Feedback>
              </Form.Group>
              <Button
                disabled={!(userFormData.email && userFormData.password)}
                type="submit"
                variant="success"
                className="modalButton"
              >
                Submit
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <button className="linkButton" onClick={() => setSigningUp(!signingUp)}>{!signingUp ? 'No account? Sign up instead' : 'Already have an account? Log in instead'}</button>
          </Modal.Footer>
    </Modal>
  );
};

export default LoginModal;