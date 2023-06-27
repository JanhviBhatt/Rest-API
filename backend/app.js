const connectToMongo = require('./db.js');
const express = require('express');
const router = require('./routes/user-routes.js');
const blogRouter= require('./routes/blog-routes.js');

connectToMongo();
const app = express()
const port = 5000

app.use(express.json());
app.use("/api/user",router) 
app.use("/api/blog",blogRouter)
  

app.listen(port, ( ) => {
  console.log(`Rest API backened is listening on port http://localhost:${port}`)

})
