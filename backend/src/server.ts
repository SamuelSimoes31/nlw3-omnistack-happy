import express, { response } from 'express';

import './database/connection'

const app = express();

app.use(express.json());

app.post('/orphanages', (req,res) => {
  return res.json({message: 'hello'});
});

app.listen(3333);
