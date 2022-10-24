const router = require('express').Router();
const User = require('../models/userModel')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const auth = require('../middleware/authorize')
const UserData = require('../models/dataModel')
const fse = require('fs-extra')
const fs = require('fs')
const Admin = require('../models/adminModel')

router.post('/checktoken', async (req, res) => {
  try {
    const token = req.body.token
    if (!token) {
      return res.status(401).json({ error: "No Token Was sent" });
    }
    const verified = jwt.verify(token, process.env.SECRET_JWT);

    if (!verified) {
      return res.status(401).json({ "error": "Token not valid anymore" })
    }
    req.user_id = verified.id;
    res.status(200).json({ msg: "userTrue" })
  } catch (e) {
    console.log(e)
    res.status(500).json("server error")
  }
})

router.post('/login', async (req, res) => {
  console.log("logging in")

  try {
    let email = req.body.email;
    let password = req.body.password;
    // validate
    if (!email || !password) {
      return res.status(400).json({ msg: "Not all fields are filled" });
    }

    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(400).json({error: "Information Incorrect"})
    }
    const passwordCheck = await bcrypt.compare(password, user.password)

    if (!passwordCheck) {
      return res.status(400).json({ error: "Bad Password" })
    }

    if (user) {
      let token = jwt.sign({ id: user._id }, process.env.SECRET_JWT)
      let data = {
        token,
        id: user._id,
        email: user.email,
        uuid: user.uuid
      }
      return res.status(200).json({ message: "Login Success", data })
    }
    else {
      return res.status(400).json({ error: 'No account exist' })
    }

  }
  catch (e) {
    console.log(e)
    return res.status(400).json({ error: 'error in the login' })
  }
})

let sameday = async (d1, d2) => {
  return d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate();
}


// a log endpoint where data are being sent to save the databse to user
// this endpoint is used by the extension

router.post('/log', auth, async (req, res) => {
  try {
    // gathers timestamp, orgid, userid, whichDay, and screenshot
    let createDirAndInsertImage = async (screenshot, day, timestamp, orgid, userid) => {
      day = day.split(" ").join("")
      return new Promise((resolve) => {
        var base64Data = screenshot.replace(/^data:image\/png;base64,/, "");

        // makes sure if the folder is there
        fse.ensureDir(`${__dirname}/../../static/org/${orgid}/${userid}/${day}/`)
          .then((res) => {
            // saves the image after decoding from b64 format
            fs.writeFile(`${__dirname}/../../static/org/${orgid}/${userid}/${day}/${timestamp}.png`, base64Data, 'base64', function (err) {
              console.log(err)
              resolve()
            })
          })
          .catch((err) => {
            console.log(err)
          })
      })
    }

    console.log(req.user_id)
    let user = await User.findOne({ _id: req.user_id })
    if (!user) {
      return res.status(400).json({ Err: "Cant find the user" })
    } else {
      let user_uuid = user.uuid

      // if user is found saves the user data in database
      let organization_id = user.organization_id
      let org = await Admin.findOne({ _id: organization_id })
      let org_uuid = org.uuid
      let urls = req.body.urls;
      let location = req.body.location;
      let screenShot = req.body.screenShot

      const date = new Date()
      const timestamp = Date.now()

      let dt = date.toDateString()
      await createDirAndInsertImage(screenShot, dt, timestamp, org_uuid, user_uuid)
      let findUserData = await UserData.findOne({ userRef: req.user_id })
      //console.log(findUserData)
      if (!findUserData) {
        let data = new UserData({
          userRef: req.user_id,
          data: [{
            day: date.toDateString(),
            logs: [{
              timestamp,
              urls,
              location,
            }]
          }]
        })
        await data.save()

      }
      else {
        // if user had saved everything already before.
        let dateString = date.toDateString()

        let dayMatch = await UserData.find({
          userRef: req.user_id,
          'data.day': date.toDateString()
        }, {
          'data.$': 1
        })
        if (dayMatch.length !== 0) {
          //push this inside that day
          let id1 = dayMatch[0]._id
          let id2 = dayMatch[0].data[0]._id
          let logs = [{
            timestamp,
            urls,
            location,
          }]
          let x = await UserData.findOneAndUpdate(
            {
              "_id": id1,
              "data._id": id2
            },
            {
              $push: {
                "data.$.logs": logs
              }
            },
            {
              useFindAndModify: false
            }
          )
        }
        else {
          // push this in data 
          let data = [{
            day: date.toDateString(),
            logs: [{
              timestamp,
              urls,
              location,
            }]
          }]

          await UserData.findOneAndUpdate(
            {
              userRef: req.user_id
            },
            {
              $push: {
                data: data
              }
            },
            {
              useFindAndModify: false
            }
          )
        }
      }
      return res.status(200).json({ message: "Saved!!!" })
    }
  }
  catch (e) {
    console.log(e)
    return res.status(401).json({ error: e })
  }
})


// a endpoint to get all the logs form the database for particular user
router.post('/getlog', async (req, res) => {
  try {
    let target_user = req.body.id
    let info = await UserData.findOne({userRef: target_user})
    let getUUID = await User.findOne({_id: target_user})
    let uuid = getUUID.uuid
    return res.status(200).json({
      message: "success",
      data: info.data,
      uuid: uuid
    })
  } catch(e){
    res.status(500).json({
      message: "some error"
    })
    console.log(e)
  }
})

module.exports = router;
