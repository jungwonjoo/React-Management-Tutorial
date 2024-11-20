const express = require("express");

const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3500;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/customers', (req, res) => {
  res.json([
    {
      id: 1,
      image: 'https://picsum.photos/64',
      name: '고길동',
      birthday: '2000.01.01',
      gender: '남자',
      job: '둘리보호자'
    },
    {
      id: 2,
      image: 'https://picsum.photos/64',
      name: '둘리',
      birthday: '2000.01.01',
      gender: '남자',
      job: '호이호이'
    },
    {
      id: 3,
      image: 'https://picsum.photos/64',
      name: '또치',
      birthday: '2000.01.01',
      gender: '남자',
      job: '또치또치또또치'
    }
  ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
