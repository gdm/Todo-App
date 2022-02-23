
const dotenv = require('dotenv')
const process = require('process')
const mongoose=require('mongoose');
dotenv.config({ path: './config/config.env' });

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology: true
}).then(
  () => { console.log("Connection established"); process.exit(0); },
  err => { console.log("Connection error"); process.exit(1); }
);

