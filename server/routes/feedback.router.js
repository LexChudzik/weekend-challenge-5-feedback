const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET feedback from database
router.get('/', (req, res) => {
    const sqlText = `SELECT * FROM feedback ORDER BY DATE DESC;`;
    pool.query(sqlText)
        .then((result) => {
            console.log(`Got feedback from database`, result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        })
})

// POST new feedback
router.post('/', (req, res) => {
    const feedback = req.body;
    const sqlText = `INSERT INTO feedback (feedback, understanding, support, comments) VALUES ($1, $2, $3, $4);`;
    pool.query(sqlText, [feedback.feeling, feedback.understanding, feedback.support, feedback.comments])
        .then((result) => {
            console.log(`added feedback to databas`, feedback);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        })
})

// DELETE feedback
router.delete('/:id', (req, res) => {
    const reqId = req.params.id;
    const sqlText = `DELETE FROM feedback WHERE id=$1;`;
    pool.query(sqlText, [reqId])
        .then((result) => {
            console.log(`deleted feedback from database`, reqId);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        })
})