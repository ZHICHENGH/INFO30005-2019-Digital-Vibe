const mongoose = require("mongoose");
const dbPasswd = "GIAMdFgDfkJBYig7";

//copy from CONNECT (MongoDB Atlas)
const dbURI =
    "mongodb+srv://testAdmin:" + dbPasswd + "@testcluster0-jan0z.mongodb.net/test?retryWrites=true";

const options = {
    useNewUrlParser: true,
    dbName: "JoyAccess"
};

mongoose.connect(dbURI, options).then(
    () => {
        console.log("Database connection established!");
    },
    err => {
        console.log("Error connecting Database instance due to: ", err);
    }
);

require('./schema.js');