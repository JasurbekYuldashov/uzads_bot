const compression = require("compression")
const express = require("express")
require("dotenv").config()
require("./actions")

const app = express()
const port = process.env.port


app.use(compression())

app.get('/', (req, res) => {
	res.send('Hello World!')
	console.log(req)

})

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})