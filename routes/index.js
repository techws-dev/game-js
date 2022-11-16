var router = require('express').Router()

router.get('/', function(req, res, next) {
  res.json({
    'name': 'Game JS API',
    'version': '1.0.0'
  })
})

module.exports = router
