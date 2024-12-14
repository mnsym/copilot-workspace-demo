const express = require('express');
const axios = require('axios');
const Parser = require('rss-parser');
const csrf = require('csurf');
const cookieParser = require('cookie-parser'); // Import cookie-parser
const cors = require('cors'); // Import cors

const app = express();
const parser = new Parser();
const csrfProtection = csrf({ cookie: true });

// CORS 設定
const corsOptions = {
  origin: 'http://localhost:8080', // 許可するオリジンを指定
  credentials: true, // クッキーを許可する
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions)); // Use CORS middleware
app.use(cookieParser()); // Use cookie-parser

// CSRF を無効にするルート
app.post('/api/login', (req, res) => {
  // ログイン処理
  res.send('CSRF protection is disabled for this route');
});

// 他のルートでは CSRF 保護を有効にする
app.use(csrfProtection);

app.get('/api/news', async (req, res) => {
  try {
    const response = await axios.get('https://news.google.com/rss');
    const feed = await parser.parseString(response.data);
    res.json(feed);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch RSS feed' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
