import express from 'express';
import { StatusCodes } from 'http-status-codes';
import helmet from "helmet";
import cors from 'cors'; 

import userRoutes from './user.routes.js';
import mainRoutes from './main.routes.js';
import ratelimit from  "express-rate-limit";
import  compression from "compression";


const app = express();
const port = 4000;  

const limiter = ratelimit({
    windowsMs: 60 * 1000,
    max: 100,
})

app.use(compression())

app. use(limiter); //apply rate limiting middle ware 
app.use(express.json());
app.use(helmet());
app.use(cors());

app.use('/v1/user', userRoutes);
app.use('v1/', mainRoutes);

// localhost
app.get('/home', (req, res)=> {
    res.status(StatusCodes.CREATED)
    res.send('Hello Emma!');
});

app.listen(port, () =>{
    console.log(`Hey, let go to http://localhost:${port}`);
});