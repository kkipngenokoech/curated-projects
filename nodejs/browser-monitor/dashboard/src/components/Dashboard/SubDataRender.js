import React, { useContext } from 'react'
import { Table, Container, Image } from 'react-bootstrap'
import moment from 'moment'
import OrgContext from '../../Context/OrgContext'

export default function SubDataRender(props) {

  const { orgData, setOrgData } = useContext(OrgContext)

  let renderLocation = (obj) => {
    return `https://www.google.com/maps/@${obj.lat},${obj.lng}z`
  }

  let renderImage = (userUUID, date, timeStamp) => {
    date = date.replace(/\s/g, "")
    return `http://localhost:5000/org/${orgData.org_uuid}/${userUUID}/${date}/${timeStamp}.png`
  }

  let timestampToMoment = (ts) => {
    ts = parseInt(ts)
    let time = moment(ts).format("hh:mm:ss a")
    return `${time}`
  }

  return (
    <div>
      <div>
        <Table striped bordered hover>

          <thead>
            <tr>
              <th>URLS</th>
              <th>LOCATION</th>
              <th>TIMESTAMP</th>
              <th>SCREENSHOTS</th>
            </tr>
          </thead>

          <tbody>
            {props.data.map((item, index) => {
              return (
                <tr>
                  <td>{item.urls.map((url) => {
                    return (
                      <div>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href={url}
                        >
                          {url}
                        </a>
                      </div>
                    )
                  })}</td>
                  <td><a rel='noreferrer' target="_blank" href={renderLocation(item.location)}>Check on Google</a></td>
                  <td>{timestampToMoment(item.timestamp)}</td>
                  <td>
                    <Image
                      className="imageFix"
                      rounded
                      src={renderImage(props.uid, props.date, item.timestamp)}
                    />

                  </td>
                </tr>

              )
            })}
          </tbody>

        </Table>
      </div>

    </div>
  )
}
