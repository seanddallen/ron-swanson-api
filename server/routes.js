module.exports = function(app){

    ////////////////// MASTER GET /////////////////////
    app.get('/quotes', (req, res) => {
      knex('quotes').where('user_id', users.id)

  
      res.json(data)
    })


    ////////////////// MASTER POST /////////////////////

    app.post('/quotes', (req, res) => {
        knex('quotes')
          .where('user_id', users.id)
          .where('location_id', locations.id)
          .insert({
            "quote": req.body.quote,
            "size": req.body.size,
            "votes": req.body.votes,
            "points": req.body.points,
            "average": req.body.average,

            "user_id": req.body.user_id,
          })
        res.json(newPost)
      })