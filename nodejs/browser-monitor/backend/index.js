const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const swaggerui = require('swagger-ui-express')

require('dotenv').config({ path: path.resolve(__dirname, './.env') });

const app = express();
app.use(cors());
app.use(express.static('./static'))

const swaggerFile = require('./swagger-output.json');
app.use("/api-docs", swaggerui.serve, swaggerui.setup(swaggerFile))

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Started server at ${PORT}`));

mongoose.connect(process.env.MONGODB_CONNECT,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }, (err) => {
    if (err) throw err;
    console.log('Mongo Connected')
  })

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.text());
app.use(express.json());
app.use(cookieParser());
app.use('', require('./api/index'));

