/**
 * Created by Lady Pinzon on 15/09/2017.
 */
const Pez = require('../models/Pez');

module.exports = (app)=>{
    app.get('/api/', (req,res)=>{
        res.json({message: 'Welcome to my API :( '})
    });

    app.get('/api/peces', Pez.getAll);
    app.get('/api/pez', Pez.get);
    app.post('/api/pez', Pez.add);
    app.put('/api/pez', Pez.update);
    app.delete('/api/pez', Pez.delete);
};
