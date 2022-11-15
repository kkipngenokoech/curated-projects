const axios = require("axios")

axios.get("https://example.com/todos")
.then(res => {
    console.log(`status code: ${res.statusCode}`)
    console.log(res)
})
.catch(error => {
    console.log(error)
})