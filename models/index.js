module.exports.Todo = require("./todo")
const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017", {
  // connecting to the mongodb database name: "todo-app" locally
  //keepAlive: true, // keeping the connection alive
  //useNewUrlParser: true,
  //useUnifiedTopology: true,
})
mongoose.set("debug", true) // enabling debugging information to be printed to the console for debugging purposes
mongoose.Promise = Promise // setting mongoose's Promise to use Node's Promise