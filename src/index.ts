import express from 'express';
import cors from 'cors';
import Routes from './routes';

const app = express();

app.use(express.json());
app.use(express.static(`${__dirname}/template`));
app.use(Routes);

app.use(cors({
    exposedHeaders: [
        'Content-Disposition',
        'Content-Length',
    ],
}));

app.listen(3333, () => {
    console.log('Servidor iniciado: http://localhost:3333');
});
