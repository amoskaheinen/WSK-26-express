import express from 'express';
const hostname = '127.0.0.1';
const app = express();
const port = 3000;

app.use('/public', express.static('public'));

// GET http://localhost:3000/api/v1/cats
app.get('/api/v1/cats', (req, res) => {
  const myData = {
    cat_id: 1,
    name: 'Vili',
    birthdate: '2015-01-01',
    weight: 4.5,
    owner: 'Amos',
    image: 'https://placekittens.com/200/300',
  };
  res.json(myData);
});

app.get('/', (req, res) => {
  res.send('Welcome to my REST API!');
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
