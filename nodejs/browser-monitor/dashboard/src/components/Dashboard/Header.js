import React, { useState, useContext } from 'react'
import './header.css'
import { useHistory } from 'react-router-dom'
import { Container, Form, Button, Alert } from 'react-bootstrap'
import OrgContext from '../../Context/OrgContext'
import axios from 'axios'

export default function Header() {

  let history = useHistory()
  const [adding, setAdding] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const [error, setError] = useState(null)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const { orgData, setorgData } = useContext(OrgContext)

  let logout = () => {
    // logs out
    localStorage.removeItem('auth-token')
    history.push('/')
  }

  let addUser = () => {
    setAdding(true)
  }

  let addToLocal = async (token) => {
    return new Promise((res) => {
      res(localStorage.setItem("auth-token", token))
    });
  }

  let getTokenFromStorage = () => {
    let token = localStorage.getItem('auth-token')
    return token
  }
  const getData = async (token) => {
    // get all the data from the token, 
    // if its not avilable route to /login
    var data = JSON.stringify({ "token": token });

    var config = {
      method: 'post',
      url: 'http://localhost:5000/api/admin/loginadmintoken',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setorgData(response.data.data)
        addToLocal(response.data.data.token)
      })
      .catch(function (error) {
        console.log(error);
        history.push('/')
      });
  }

  let submit = (e) => {
    e.preventDefault();
    setIsLoading(true)
    var data = JSON.stringify({ "email": email, "password": password, "organization_id": orgData.id });

    var config = {
      method: 'post',
      url: 'http://localhost:5000/api/admin/reguser',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        setIsLoading(false)
        console.log(JSON.stringify(response.data));
        setAdding(false)
        let token = getTokenFromStorage()
        getData(token)
      })
      .catch(function (error) {
        console.log(error);
        if (error.response?.message) {
          setError(error.response.message)
        }
        else if (error.response?.error) {
          setError(error.response.error)
        } else {
          setError(error.message)
        }

        setIsLoading(false)
      });
  }

  return (
    <>
      <div className='apart text-muted header'>
        <h6
          className='cursorPoint h'
          onClick={() => {
            addUser()
          }}
        >Add User</h6>

        <h6
          className='cursorPoint h'
          onClick={() => {
            logout()
          }}
        >Logout</h6>
      </div>
      {adding ?
        <>
          <h1
            className='carousel-container cursorPoint'
            onClick={() => {
              setAdding(false)
              setError(null)
            }}
          >X</h1>
          <div className='cOpen'>
            <Container>
              <Form className='formContent' onSubmit={submit}>
                <Form.Group className="fadeIn second" controlId="formBasicEmail">
                  {error ? <Alert variant='warning'>{error}</Alert> : null}
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
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
                  {!isLoading ? "Register" : "Registering..."}
                </Button>
              </Form>
            </Container>
          </div>
        </>
        : null
      }

    </>
  )
}
