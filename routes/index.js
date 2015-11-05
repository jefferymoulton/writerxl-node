var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('home', { title: 'WriterXL' });
});

// TODO: Handle partial rendering for server-side REACT
router.get('/pages/*', function(req, res, next) {
    res.render('pages/' + req.params[0]);
});

module.exports = router;