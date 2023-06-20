import express from 'express';
import config from './db/config.js';
 import bodyParser from 'body-parser';

// Import routes here
import userRoutes from './routers/userRoutes.js';

const app = express();

// Middlewares here
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));


// Instantiate routes here
userRoutes(app);

app.get('/', (req,res) => {
    res.send('Hello Welcome To My Api!');
});

app.listen(config.port, () => {
    console.log(`Server is running on ${config.url}`);
});