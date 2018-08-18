var express = require('express');
var router = express.Router();
router.get('/', function (req, res) {
    res.render('index', { title: '登入' });
})
router.post('/', function (req, res) {
    
})
module.exports = router;