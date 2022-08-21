const express = require("express");
const dotenv = require("dotenv");
const path = require('path');
const app = express();
dotenv.config();

const PORT = process.env.PORT || 3001;
const publicDir = path.join(__dirname, "..", '/frontend')

app.use('/', express.static(path.join(publicDir)))

app.use('/', require('./routes/route'));

app.all('*', (req, res) => {
  res.status(404)
  if(req.accepts('html')) {
      res.sendFile(path.join(publicDir, 'views/404.html'));
  } else if (req.accepts('json')) {
      res.json({message : "404 - Page Not Found"})
  } else {
      res.type('txt').send('404 - Page Not Found')
  }
})

app.listen(PORT, () => {
  console.log(`server running at PORT : ${PORT}`);
});
