import express from 'express';
import data from "./test-data";

const router = express.Router();

router.get('/', (req, res) => {
    res.send({ data: data });
});

export default router;