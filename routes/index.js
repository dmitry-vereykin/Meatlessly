var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    theGoal: "active",
    factoryFarming: "",
    theFacts: "",
    pledgeNow: ""
  });
});

router.get('/factoryFarming', function(req, res, next) {
  res.render('factoryFarming', { 
    theGoal: "",
    factoryFarming: "active",
    theFacts: "",
    pledgeNow: ""
  });
});

router.get('/theFacts', function(req, res, next) {
  res.render('theFacts', { 
    theGoal: "",
    factoryFarming: "",
    theFacts: "active",
    pledgeNow: ""
  });
});

router.get('/pledgeNow', function(req, res, next) {
  res.render('pledgeNow', { 
    theGoal: "",
    factoryFarming: "",
    theFacts: "",
    pledgeNow: "active"
  });
});

module.exports = router;
