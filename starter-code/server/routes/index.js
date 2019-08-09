var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.get('/countries/:country', (req, res, next) => {
//   let countries = require('./countries.json')

  // let searchCountry = req.params.country.toLowerCase()
  // let countriesFiltered = countries.filter((country) => {
  //   country.name.common.toLowerCase().includes(searchCountry) || country.name.official.include(searchCountry)
  // })
// })

router.get('/countries', (req, res, next) => {
  const countries = require('./countries.json')
  res.json(countries)
})


module.exports = router;
