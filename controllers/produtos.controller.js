const Produtos = require('../models/produtos.model');


exports.inserir = function(req, res){
    let produtos = new Produtos (
        {
        nome: req.body.nome,
        calorias: req.body.calorias
        }
    );

    produtos.save(function(err){
        if(err){
            return next(err);
        }
        res.send('Produto adicionado com sucesso')
    })
};

exports.detalhes = function(req,res){
    Produtos.findById(req.params.id, function (err, produtos){
        if(err){
            return next(err);
        }
        res.send(produtos);
    })
}
exports.update = function(req,res){
    Produtos.findByIdAndUpdate(req.params.id, {$set: req.body},
        function(err,produtos){
            if(err) return next(err);
            res.send('Produto sofreu um update');
        })
}

exports.delete = function(req, res){
    Produtos.findByIdAndRemove(req.params.id, function(err){
        if(err) return next(err);
        res.send('Produto deletado');
    })
}

exports.test = (req, res) => {
    res.send('Controller funcionando')
};