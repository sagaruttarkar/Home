require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const twilio = require('twilio');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Twilio client
const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

// WhatsApp message route
app.post('/send-whatsapp', async (req, res) => {
  try {
    const { message, to } = req.body;

    if (!message || !to) {
      return res.status(400).json({ success: false, error: 'Message and recipient number are required' });
    }

    const response = await client.messages.create({
      from: `whatsapp:${process.env.TWILIO_WHATSAPP_NUMBER}`,
      to: `whatsapp:${to}`,
      body: message
    });

    res.json({ success: true, sid: response.sid });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// Dynamic port handling
const DEFAULT_PORT = process.env.PORT || 5000;

const server = app.listen(DEFAULT_PORT, () => {
  console.log(`Backend running on port ${server.address().port}`);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    // If port is busy, pick a random free port
    const tempServer = app.listen(0, () => {
      console.log(`Port ${DEFAULT_PORT} in use, running on port ${tempServer.address().port} instead`);
    });
  } else {
    console.error(err);
  }
});
