import express from 'express';
import bodyParser from 'body-parser';
import routes from './src/routes/newsRoutes';

const app = express();
const PORT = process.env.PORT || 80

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

routes(app);

//Logging in CLI
app.get('/', (req, res) => 
    res.send(`Node and express server is running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`Your server is running on port ${PORT}`)
);