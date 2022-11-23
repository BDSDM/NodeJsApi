const { json } = require("body-parser");
//const bodyParser = require('body-parser');
const express = require("express");
const app = express();
require("./models/dbConfig");
const postsRoutes = require("./routes/postsController");
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use("/posts", postsRoutes);
app.listen(5500, () =>
  console.log("Server started à http://localhost:5500/posts")
);
//C:\Users\AFPA\Desktop\ApiNodeJs-master\ApiNodeJs-master\NODE-API\index.js
