const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  console.time("Execution time: ")
  let x = 0.0001;
  for (let i = 0; i <= 1000000; i++) {
    x += Math.sqrt(i);
  }
  console.timeEnd("Execution time: ");
  res.json({
    message: `Hello from CPU intensive endpoint!`
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
