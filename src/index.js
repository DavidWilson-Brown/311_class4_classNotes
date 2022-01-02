// import in the express module
const express = require("express");

// instantiate our application
const app = express();

// configure the app to handle json in the request body
app.use(express.json());

const routes = require("./routes");

app.use(routes);

// define the port this application will listen on
const PORT = 8000;








// start server and have it listen on the defined port
app.listen(PORT, function(){
  console.log("Server started on port ", PORT);
})

