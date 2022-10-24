import React, { useContext, useEffect, useState } from 'react';
import { Table, Container } from 'react-bootstrap'
import userContext from "../../Context/UserDataContext"
import SubDatRender from './SubDataRender';

const UserDataRender = () => {

  const { userData, setUserData } = useContext(userContext)
  const [subData, setSubData] = useState(null)
  const [date, setDate] = useState(null)
  const [uuid, setUUID] = useState(null)

  const subDataRender = async (logData, day, uuidd) => {
    setSubData(logData)
    setDate(day)
    setUUID(uuidd)
  }
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>DAY</th>
          </tr>
        </thead>
        <tbody>
          {userData.data.map((value, index) => {
            return (<tr>
              <td
                key={index}
                className="cursorPoint"
                onClick={() => subDataRender(value.logs, value.day, userData.uuid)}
              >{value.day}</td>
            </tr>)
          })}
        </tbody>
      </Table>
          {subData? <SubDatRender data={subData} date={date} uid={uuid} /> : null}
    </div>
  );
}

export default UserDataRender;
