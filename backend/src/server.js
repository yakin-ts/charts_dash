import express from 'express';
import cors from 'cors';

import dataRoute from './routes/data.route.js';
import insightRoute from './routes/insight.route.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

//Routes
app.use('/api/data', dataRoute);
app.use('/api/insight', insightRoute);


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});