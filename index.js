const express = require('express')
const app = express()
const port = 3000

app.use(MiddleWare1)
app.use(MiddleWare2)


function MiddleWare1(req,res, next){
    console.log("I am middle one")
    next()
}

function MiddleWare2(req,res, next){
    console.log("I am middle two")
    next()
}

app.get('/', (req, res) => {
  res.send('Hello World!')
  console.log("I am main function")
})

app.listen(port)