const express = require('express');
const app = express();
const PORT = 3000;
const postrouter = require('./routes/postroute');
const connectDB = require('./db/connect');
require('dotenv').config();

app.use(express.json());

app.get('/',(req, res) => {
    res.send('it works');
});

app.use('/api/v1/posts', postrouter);

(async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(PORT,() => { console.log(`Server is working on port ${PORT}...`) });
  } catch (error) {
    console.log(error);
  }
})();
