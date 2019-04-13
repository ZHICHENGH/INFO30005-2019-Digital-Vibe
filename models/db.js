const mongoose = require("mongoose");

//copy from CONNECT (MongoDB Atlas)
const dbURI =
    "mongodb+srv://<testAdmin>:<GIAMdFgDfkJBYig7>@testcluster0-jan0z.mongodb.net/";

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