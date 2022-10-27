const express = require('express')
const app = express();
const cors = require('cors');
app.use(cors());

const port = process.env.PORT || 5000;

const categories = require('./data/categories.json');
const courses = require('./data/courses.json')


app.get('/', (req, res) => {
  res.send('eLearning API runnig');
});

app.get('/categories', (req, res) => {
  res.send(categories);
})

app.get('/category/:id', (req, res) => {
  const id = req.params.id;
  if (id === '07') {
    res.send(courses)
  }
  else {

    const categoryCourse = courses.filter(course => course.category_id === id);
    res.send(categoryCourse);
  }
})

app.get('/courses', (req, res) => {
  res.send(courses)
})

app.get('/courses/:id', (req, res) => {
  const id = req.params.id;
  console.log(id);
  const selectedCourse = courses.find(course => course._id === id);
  res.send(selectedCourse);
})

app.listen(port, () => {
  console.log("eLearning server running on port", port);
})