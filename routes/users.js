var express = require('express');
var router = express.Router();

const userHandler = require('../router_handler/users')

/* GET users listing. */
router.post('/reg', userHandler.regUser);

router.post('/login', userHandler.login);

module.exports = router;
