const server = require('../server');
//Es una buena practica devolver el objeto que se elimino, agrego o al cual se le realizo update, no oslo el mensaje de confirmación que termino la acción.
exports.getAll= (req, res)=>{
    server.database.collection('peces').find().toArray((err, result)=>{
        if(err) return 'Error in database';
        res.send(result);
    })
};
exports.get = (req, res)=>{
    server.database.collection('peces').find({'nombre': req.query.nombre}).toArray((err, result)=>{

        if(err) return 'Error en databse';
        res.send(result);
    })
};
exports.add = (req, res)=>{
  server.database.collection('peces').save(req.body, (err, result)=>{

      if(err) return 'Error en post'
      res.send('Se agrego con exito el pez'+ JSON.stringify(req.body));
  })
};
exports.update= (req, res)=>{
    server.database.collection('peces').update({'nombre': req.query.nombre}, {$set: {ciudades: req.body.ciudades}}, (err, result)=>{

        if(err) return 'Error en delete'
        //Elimino?
        res.send('Se elimino con exito el pez');
    })
};
exports.delete= (req, res)=>{
    server.database.collection('peces').remove({'nombre': req.query.nombre}, (err, result)=>{

        if(err) return 'Error en delete'
        res.send('Se elimino con exito el pez');
    })
};
