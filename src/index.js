import express from 'express'
import fs from 'fs'
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/hello-text/', (req, res) => {
  fs.readFile('data/hello.txt', 'utf-8', function(err, contents) {
    res.send(contents)
  })
})

app.get('/hello/', (req, res) => {
  fs.readFile('data/hello.txt', 'utf-8', function(err, contents) {
    res.json({ 'name' : contents })
  })
})

app.get('/hello-param/', (req, res) => {
  fs.readFile('data/hello.txt', 'utf-8', function(err, contents) {
    res.json({ 'name' : req.query.name})
    console.log(req.query.name)
  })
})

app.post('/hello-json/', (req, res) => {
  fs.readFile('data/hello.txt', 'utf-8', function(err, contents) {
    res.send(req.body)
    console.log(req.body)
  })
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
