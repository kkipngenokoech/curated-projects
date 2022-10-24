import './App.css';
import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { ToastProvider } from "react-toast-notifications"

import Login from './components/LoginReg/Login'
import Dash from './components/Dashboard/Dash'

import OrgContext from './Context/OrgContext'
import UserContext from './Context/UserDataContext'

function App() {
  const [orgData, setorgData] = useState({
    data: null
  })
  const [userData, setUserData] = useState({
    data: null
  })
  return (
    <OrgContext.Provider value={{ orgData, setorgData }}>
      <UserContext.Provider value={{ userData, setUserData }}>
        <div className="App">
          <ToastProvider placement='bottom-left'>
            <Switch>
              <Route exact path='/dash' component={Dash} />
              <Route exact path='/' component={Login} />
            </Switch>
          </ToastProvider>
        </div>
      </UserContext.Provider>
    </OrgContext.Provider>
  );
}

export default App;
