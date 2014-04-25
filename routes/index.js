exports.index1 = function(req, res) {
    var menu = require('../models/menu1.json');
    res.render('index1', {
        menu: menu,
        url: req.url
    });
};
exports.index2 = function(req, res) {
    var menu = require('../models/menu2.json');
    res.render('index2', {
        menu: menu,
        url: req.url
    });
};
exports.index3 = function(req, res) {
    var menu = require('../models/menu3.json');
    res.render('index3', {
        menu: menu,
        url: req.url
    });
};