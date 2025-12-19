require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Twilio } = require('twilio');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Twilio client
const client = new Twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// Test route
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// WhatsApp route
app.post('/send-message', async (req, res) => {
  const { to, message } = req.body;
  if (!to || !message) return res.status(400).json({ error: 'to and message required' });

  try {
    const response = await client.messages.create({
      from: process.env.TWILIO_WHATSAPP_FROM,
      to: `whatsapp:${to}`,
      body: message,
    });
    res.status(200).json({ success: true, sid: response.sid });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// Try default port 5000, fallback to random free port
const DEFAULT_PORT = 5000;
const server = app.listen(DEFAULT_PORT, () => {
  console.log(`Server running on port ${server.address().port}`);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    // Pick a random free port
    const tempServer = app.listen(0, () => {
      console.log(`Port ${DEFAULT_PORT} in use, running on port ${tempServer.address().port} instead`);
    });
  } else {
    console.error(err);
  }
});
