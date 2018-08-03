var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    theGoal: " active",
    factoryFarming: "",
    theFacts: ""
  });
});

router.get('/factoryFarming', function(req, res, next) {
  res.render('factoryFarming', { 
    theGoal: "",
    factoryFarming: " active",
    theFacts: ""
  });
});

router.get('/theFacts', function(req, res, next) {
  res.render('theFacts', { 
    theGoal: "",
    factoryFarming: "",
    theFacts: " active"
  });
});

module.exports = router;
