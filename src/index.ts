import express from 'express';
import cors from 'cors';
import Routes from '~/routes';
import path from 'path';

const app = express();

app.use(express.json());

app.use(Routes);

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(cors({
    exposedHeaders: [
        'Content-Disposition',
        'Content-Length',
    ],
}));

app.listen(3333, () => {
    console.log('Servidor iniciado: http://localhost:3333');
});
