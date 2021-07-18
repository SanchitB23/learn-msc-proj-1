const express = require('express')
const axios = require("axios");
const app = express();

app.use(express.json());
const events = []
app.post('/events', async (req, res) => {
  const event = req.body
  events.push(event)
  console.log("Event Received - ", event.type)
  await axios.post('http://posts-clusterip-srv:4000/events', event)
  console.log("POSTS SUCCESS for event - ", event.type)
  await axios.post('http://comments-srv:4001/events', event)
  console.log("COMMENTS SUCCESS for event - ", event.type)
  await axios.post('http://query-srv:4002/events', event)
  console.log(" QUERY SUCCESS for event - ", event.type)
  await axios.post('http://moderation-srv:4003/events', event)
  console.log(" MODERATION SUCCESS for event - ", event.type)

  res.status(200).send({})
})

app.get('/events', (req, res) => {
  console.log("GET EVENTS CALLED")
  res.send(events)
})

app.listen(4005, () => {
  console.log("Events Listening to 4005")
})
