let knex = require('./db/knex');
// let db = require('../db/db.js');


module.exports = function(app){

    app.post('/newquote', (req, res) => {
        console.log('working')

        knex('quotes')
          .where('quote', req.body.quote)
          .then(result => {
            console.log(result);
            if(result.length === 0){
              knex('quotes')
              .insert({
                "quote": req.body.quote,
                "votes": 1,
                "points": + req.body.points,
                // "average": + req.body.points,
              })
              .then(() => {
                console.log('insert ran');
                res.send(200);
              })
            } else {
              knex('quotes')
                .where('quote', req.body.quote)
                .increment('votes', 1)
                .increment('points', req.body.points)
                .then(result => {console.log(result)})
              }
            }
        )})
      }