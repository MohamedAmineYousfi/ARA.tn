const express = require('express');

const Blogs = require('../database-mongodb/Blog.js');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/api/blogs', function(req, res) {
  // TODO - your code here!
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});