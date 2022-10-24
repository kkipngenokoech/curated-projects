import React, { useContext, useEffect } from 'react';
import OrgContext from '../../Context/OrgContext'
import { Container, Card, Col, Row } from 'react-bootstrap'
import userContext from '../../Context/UserDataContext'
import UserDataRender from './UserDataRender'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import Header from './Header'

const Dash = () => {
  const history = useHistory()
  const { setorgData, orgData } = useContext(OrgContext)
  const { setUserData, userData } = useContext(userContext)

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

  useEffect(() => {
    let token = getTokenFromStorage()
    if (!token) {
      history.push('/')
    }
    else {
      if (orgData.data === null) {
        getData(token)
      }
    }
  })

  const getUserData = async (value) => {
    var axios = require('axios');
    var data = JSON.stringify({ "id": value.id });

    var config = {
      method: 'post',
      url: 'http://localhost:5000/api/user/getlog',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        setUserData({ data: response.data.data, uuid: response.data.uuid })
      })
      .catch(function (error) {
        console.log(error.message);
        setUserData({ data: null })
      });
  }

  if (orgData === undefined) {
    return (
      <>
        "Sorry you have no data, did you logged in?"
      </>
    )
  }
  else {
    return (
      <div>
        <Header />
        <Container className='dash-cont'>
          <div className='d-flex justify-content-between'>
            <h3 className='text-muted'>All users</h3>
            <h3 className='text-muted'>Welcome {orgData.email}</h3>
          </div>
          <Row noGutters='true'>

            {orgData.usersNew?.map((item, index) => {
              return (
                <Col className="col-lg-4 ml-auto" key={index}>
                  <Card bg='info'>
                    <div className="p-3 media d-flex">
                      <div className="ml-auto">
                        <h3>{item.email}</h3>
                        <a
                          className="getData"
                          href="#"
                          onClick={() => getUserData(item)}
                        >
                          Get Data
                        </a>
                      </div>
                    </div>
                  </Card>
                </Col>
              )
            })}

          </Row>
          {userData.data ? <UserDataRender /> : <pre>No Data to load</pre>}
        </Container>
      </div>
    );
  }
}

export default Dash;
