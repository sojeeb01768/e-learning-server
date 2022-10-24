const express = require('express')
const app = express();
const port = process.env.PORT || 5000;



app.get('/', (req, res) => {
    res.send('eLearning API runnig');
  });

  app.listen(port, () => {
    console.log("eLearning server running on port", port);
  })