import express from 'express'
import { greet } from './src/greeter'

const app = express()
const port:number = 3000;
console.log("starting hello world...")

app.get("/", function(req, res) {
    res.send(greet("world"))
})

app.listen(port, () => {
    console.log("listening to port " + port.toString())
})

console.log("test print for no reason")
