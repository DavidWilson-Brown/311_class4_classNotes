let express = require("express");

let router = express.Router();

// this array will hold the todo items as they are updated, added, deleted through the endpoints defined below
const database = []

/**
 * GET /list
 * this end point should return the entire todo list
 * 
 */
 router.get("/list", function(req, res) {
  console.log("GET /list");
  res.json(database);
});


/**
 * 
 * POST /list
 * this end point should add an item to the list
 * the item will be in the body of the request
 * 
 */

 router.post("/list", function(req, res) {
  // 1. read the json content from the body of the request
  // 2. add the json content to the database (hint: to add an item use the push() method)
  // 3. make sure to send something back on the response (either json, or statusCode)
  console.log("POST /list");
  // read what the new item is from the request body
  let newItem = req.body;

  // print what is happening
  console.log("New Item:", newItem);

  // add it to our database
  database.push(newItem);

  // respond back with the item we added
  res.json(newItem);
});

/**
 * 
 * PUT /list
 * 
 * this end point should update an item to the list at the given position
 * the new item is in the body of the request
 * 
 */

router.put("/list/:pos", function(req, res) {
  // print what is happening
  console.log("PUT /list", req.params.pos);
  let updatedItem = req.body;
  let pos = req.params.pos;
  database(pos) = updatedItem;
  // example of how to send a code, but no additional info
  res.sendStatus(202);
})

/**
 * 
 * DELETE /list
 * 
 * this end point should delete an item from the list at the given position
 * 
 */

router.delete("/list/:pos", function(req, res) {
  // print what is happening
    // ?? Should id be pos ??
  console.log("DELETE /list/:id");
  // to get a specific item from the body, use req.params.pos
    // then because of the splice method, it will start at the given pos and only delete 1 item
      // ?? Not sure if this explanation of splice is understood ??
  let deleted = database.splice(req.params.pos, 1);
  // respond back in json format the item that was deleted
  res.json(deleted);
})


// export this to make it available to be used
  // this file must be exported because it is required in the index.js file
module.exports = router;