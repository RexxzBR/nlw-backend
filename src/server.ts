import express from 'express';
import routes from './routes';
import path from 'path';
import cors from 'cors';
import {errors} from 'celebrate';

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.use(errors());

app.use((req, res) => {
    res.status(404).json({error: "Sorry can't find that!"})
})
const port = process.env.PORT || 3333;

app.listen(port);