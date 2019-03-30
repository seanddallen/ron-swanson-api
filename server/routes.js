module.exports = function(app){

    app.post('/quotes', (req, res) => {
        knex('quotes')
          .insert({
            "quote": req.body.quote,
            "votes": req.body.votes,
            "points": req.body.points,
            "average": req.body.average,
          })
        res.json(newQuote)
      })