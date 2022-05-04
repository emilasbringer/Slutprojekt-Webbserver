const express = require('express');
const router = express.Router();
const pool = require('../database');
/* 
    BASE URL /tasks
    GET / - Get all tasks
    POST / - Create a new task
    GET /:id - Get a task by id
    PUT /:id - Update a task by id
    DELETE /:id - Delete a task by id
*/

router.get('/', async (req, res, next) => {
    let query = 'SELECT * FROM meeps ORDER BY expiration_date ASC';
    let search;
    if (typeof req.query.search !== 'undefined') {
        if(req.query.search.length > 0) {
            console.log("The search query is = "+req.query.search);
            search = '%'+req.query.search+'%';
            query = 'SELECT * FROM meeps WHERE body LIKE ? ORDER BY created_at ASC';
        }
    }
    await pool.promise()
        .query(query, [search])
        .then(([rows, fields]) => {
              res.render('meeps.njk', {
                meeps: rows,
                title: 'Database',
                layout: 'layout.njk',
                token: req.session.loginToken
              });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                tasks: {
                    error: 'Error getting meeps'
                }
            })
        });
});

router.post('/', async (req, res, next) => {
    console.log("OOOOOOOOOOOOOGA");
    const username = req.body.name;
    const phonenumber = req.body.phonenumber;
    const expiration_date = req.body.date;
    console.log("Username = " + username);
    console.log("phonenumber = " + phonenumber);
    console.log("expiration_date = " + expiration_date);
    await pool.promise()
    .query('INSERT INTO meeps (body,phonenumber,expiration_date) VALUES (?,?,?)', [username,phonenumber,expiration_date])
    .then((response) => {
        res.redirect("/meeps");
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            meep: {
                error: 'Error creating new task'
            }
        })
    });
});

router.get('/:id/delete', async (req, res, next) => {
    const id = req.params.id;
    await pool
        .promise()
        .query('DELETE FROM meeps WHERE id = ?', [id])
        .then((response) => {
            if (response[0].affectedRows === 1) {
                return res.redirect('/meeps');
            } else {
                req.session.flash = 'Meep not found';
                return res.status(400).redirect('/meeps');
            }
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({
                meep: {
                    error: 'Error getting meeps',
                },
            });
        });
});


router.post('/:id/update', async (req, res, next) => {
    const id = req.params.id;
    const username = req.body.name;
    const phonenumber = req.body.phonenumber;
    const expiration_date = req.body.date;

    console.log(id,username,phonenumber,expiration_date);

    await pool
    .promise()
    .query('UPDATE meeps SET body = ?, phonenumber = ?, expiration_date = ? WHERE id = ?',[username,phonenumber,expiration_date,id])
    .then(response => {
        res.redirect('/meeps');
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({
            meep: {
                error: 'Error updating meep',
            },
        });
    });

});

module.exports = router;