const router = require('express').Router();
const User = require('../models/userModel');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const Admin = require('../models/adminModel')

router.post('/regadmin', async (req, res) => {
  // register an admin where the super admin will send email password and orgname
  try {
    let email = req.body.email
    let password = req.body.password
    let organization_name = req.body.organization_name

    // if the user doesnt send email password or orgname, then it returns 401
    if (!email || !password || !organization_name) {
      return res.status(401).json({ msg: "Not all field are filled" })
    }
    // password length must be more then 5 char length
    if (password.length < 5) {
      return res.status(401).json({ msg: "Password needs to be atleast 5 character" })
    }

    // checks if there is the user with that ID
    const isThereAdmin = await Admin.findOne({ email: email })
    if (isThereAdmin) {
      // if user is found with that email, then disallow registeration
      return res.status(401).json({ msg: "Organization with that email already exist" })
    }

    // generating password encryption
    const salt = await bcrypt.genSalt(10)
    const pHash = await bcrypt.hash(password, salt);
    const uuid = uuidv4();

    // pushes the data to the database
    const adminCreate = new Admin({
      email,
      password: pHash,
      organization_name,
      uuid
    })

    const saveAdmin = await adminCreate.save();
    res.status(200).json(saveAdmin)
  }
  catch (e) {
    console.log(e)
  }
})

router.post('/loginadmin', async (req, res) => {
  try {
    // gets email and password from the user to login
    let email = req.body.email;
    let password = req.body.password;

    // if doesnt contains email or password, then disallow further
    if (!email || !password) {
      return res.status(400).json({ error: "Not all field are filled" })
    }

    // checks if the email exist on the database
    const findAdmin = await Admin.findOne({ email: email });
    if (!findAdmin) {
      return res.status(400).json({ error: "Password or Email incorrect" })
    }
    // checks password
    const passwordCheck = await bcrypt.compare(password, findAdmin.password)

    if (!passwordCheck) {
      return res.status(400).json({ error: "Password Or Email incorrect" })
    }

    if (findAdmin) {
      let token = jwt.sign({ id: findAdmin._id }, process.env.SECRET_JWT)
      let users = await User.find({ organization_id: findAdmin._id })

      let usersNew = []
      // gathers users data and compiles and sends to frontend
      if (users) {
        for (i in users) {
          i = users[i]
          let x = {
            id: i._id,
            email: i.email,
            uuid: i.uuid
          }
          usersNew.push(x)
        }
      }
      let data = {
        token,
        email: findAdmin.email,
        id: findAdmin._id,
        org_name: findAdmin.organization_name,
        org_uuid: findAdmin.uuid,
        usersNew
      }
      return res.status(200).json({ message: "Login Success", data })
    } else {
      return res.status(400).json({ error: "No Account exists" })
    }

  } catch (e) {
    console.log(e)
    return res.status(400).json({ error: "Server side error" })
  }
})


// the login token are kept on localstorage on frontend
// those token are used to check if login can be done or not
// this helps user to auto login
router.post('/loginAdminToken', async (req, res) => {
  try {
    let token = req.body.token
    const verified = jwt.verify(token, process.env.SECRET_JWT);

    if (!verified) {
      return res.status(400).json({ Error: "ops cant verify that token" })
    }
    // afte checking token find the user and sends the data to frontend
    const findAdmin = await Admin.findOne({ _id: verified.id });
    let users = await User.find({ organization_id: verified.id })

    let usersNew = []
    if (users) {
      for (i in users) {
        i = users[i]
        let x = {
          id: i._id,
          email: i.email,
          uuid: i.uuid
        }
        usersNew.push(x)
      }
    }
    let data = {
      token,
      email: findAdmin.email,
      id: findAdmin._id,
      org_name: findAdmin.organization_name,
      org_uuid: findAdmin.uuid,
      usersNew
    }
    return res.status(200).json({ message: "Login Success", data })

  } catch (e) {
    return res.status(400).json({ error: "Server side error" })
  }
})

router.post('/reguser', async (req, res) => {
  try {
    // gets email, password and orgid
    let email = req.body.email;
    let password = req.body.password;
    let organization_id = req.body.organization_id

    let findOrg = await Admin.findOne({ organization_id: organization_id })
    

    // if user doesnt provide email or password, then code exists
    if (!email || !password) {
      return res.status(401).json({ msg: "Not all field are filled" })
    }
    // pw should be min of 5 char long
    if (password.length < 5) {
      return res.status(401).json({ msg: "Password needs to be atleast 5 character" })
    }

    // check the email if it contains in the database, if it contains then reject the request.
    const thereIsUser = await User.findOne({ email: email })
    if (thereIsUser) {
      return res.status(401).json({ msg: "User exists with that email" })
    }

    const salt = await bcrypt.genSalt(10)
    const pHash = await bcrypt.hash(password, salt);
    const uuid = uuidv4();

    const userCreate = new User({
      email,
      password: pHash,
      uuid,
      organization_id
    });

    const saveUser = await userCreate.save();
    res.status(200).json(saveUser)
  }
  catch (e) {
    console.log(e.message)
  }
})

module.exports = router;
