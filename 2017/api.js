const { json } = require('body-parser');
const express = require('express');
const router = express.Router();

router.use(json());

router.use((req, _res, next) => {
    console.log(`[${req.method}] ${req.path}`);
    next();
});

router.post('/users/login', (req, res) => {
    const { email, password } = req.body;
    res.json({
        '_id': 'abcdefghijklmnopqrstuvwx',
        'token': '0000-0000-0000-0000',
        'servers': [
            "0example123server4",
        ]
    });
});

router.post('/users/ghost_login', (req, res) => {
    const authToken = req.headers.authorization;
    res.json({
        '_id': 'abcdefghijklmnopqrstuvwx',
        'token': '0000-0000-0000-0000',
        'servers': [
            "0example123server4",
        ]
    });
})

router.get('/server/:id', (_req, res) => {
    res.json({});
});

module.exports = router;