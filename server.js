const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

const BOT_TOKEN = process.env.BOT_TOKEN;

// 1. የቦቱ ዋና የሙከራ መስመር (Health Check)
app.get('/', (req, res) => {
  res.send('Aelaf Backend Engine is Running Successfully!');
});

// 2. ከቴሌግራም መልእክት ሲመጣ አስተናጋጅ (Telegram Webhook)
app.post('/webhook', async (req, res) => {
  try {
    const update = req.body;
    
    // የቻናል ፖስት ወይም መልእክት ሲመጣ
    if (update.channel_post) {
      console.log('New Channel Post Received:', update.channel_post.text);
    }

    res.sendStatus(200);
  } catch (error) {
    console.error('Webhook Error:', error);
    res.sendStatus(500);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(Aelaf Server running on port ${PORT});
}); 
