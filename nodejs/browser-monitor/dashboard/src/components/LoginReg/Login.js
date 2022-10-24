import React, { useState, useContext } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { Container, Form, Button, Alert } from 'react-bootstrap'
import './loginreg.css'

import OrgContext from '../../Context/OrgContext'

export default function Login() {

  const history = useHistory()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [isLoading, setLoading] = useState(false)

  const [error, setError] = useState();

  const { setorgData, orgData } = useContext(OrgContext)

  let addToLocal = async (token) => {
    return new Promise((res) => {
      res(localStorage.setItem("auth-token", token))
    });
  }

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);

    var data = JSON.stringify({ "email": email, "password": password });

    var config = {
      method: 'post',
      url: 'http://localhost:5000/api/admin/loginadmin',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    await axios(config)
      .then(function (response) {
        setorgData(response.data.data)
        addToLocal(response.data.data.token)
        console.log(response)
        history.push('/dash')
      })
      .catch(function (error) {
        try {
          setError(error.response.data.error)
        } catch (e) {
          setError(e.message)
          setLoading(false);
        }
      });
  }

  return (
    <Container className='w-25 p-3 go-center'>
      <Form className='formContent' onSubmit={submit}>
        <Form.Group className="fadeIn second" controlId="formBasicEmail">
          {error ? <Alert variant='warning'>{error}</Alert> : null}
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="fadeIn third" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button
          className="fadeIn fourth"
          variant="primary"
          type="submit"
        >
          {!isLoading ? "Login" : "Logging In..."}
        </Button>
      </Form>
    </Container>
  )
}
