import express from 'express';
import routing from './routes/index.js';

const app = express();
const port = 1245;


routing(app);

app.listen(port);

export default app;
