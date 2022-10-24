const jwt = require('jsonwebtoken');

// a middlewere where all the user are authorized based on the token received
const auth = async (req, res, next) => {
  try {
    const token = req.body.token
    if (!token) {
      return res.status(401).json({ error: "No token Provided" });
    }

    const verified = jwt.verify(token, process.env.SECRET_JWT);

    if (!verified) {
      return res.status(401).json({ error: "Token Verification Failed" });
    }
    req.user_id = verified.id;
    next();
  }
  catch (e) {
    console.log(e)
    res.status(500).json({ error: 'Unxexpected error while authencation' })
  }
}

module.exports = auth;