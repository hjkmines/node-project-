const express = require("express")
const bodyParser = require("body-parser")
const app = express() 

app.use(bodyParser.json())

app.post("/messages", (request, response) => {
  const message = `The message you sent me was: ${request.body.message}`

  response.json({message})
})

app.listen(process.env.PORT || 9000, () => {
  console.log("Listening...")
})











// const express = require("express")
// const bodyParser = require("body-parser")
// const app = express()

// app.use(bodyParser.json())

// app.post("/messages", (request, response) => {
//   const message = `The message you sent me was: ${request.body.message}`

//   response.json({message})
// })

// app.listen(process.env.PORT || 9000, () => {
//   console.log("Listening...")
// })