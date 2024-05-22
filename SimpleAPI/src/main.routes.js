import express from "express";

const router = express.Router();    

// localhost
router.get('/ping', (req, res)=> {
    res.status(StatusCodes.CREATED)
    res.send('OK!');
});


export default router;