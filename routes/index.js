var express = require('express');
var router = express.Router();
const { Client, Pool } = require('pg')

const pool = new Pool({
  user:"bhlnhsedeegwtb",
  password:"83beb4037d189398c77309cb18eb0b5c0a5ec725bf570451e31551588b77c0bb",
  host:"ec2-18-204-232-57.compute-1.amazonaws.com",
  port:"5432",
  database:"ddr5sh5ro6jd51",
  ssl:"on"
})

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/render',function(req,res,next){
  res.render('render');
})

 router.get('/select',function(req,res,next){
  postgreSQL_select_Query = "select * from rooms";
  let result;
    pool.query(postgreSQL_select_Query,(err,r)=>{
      res.json(r.rows);
  })
})
router.get('/looping', function (req, res, next) {
  let array = [];
  for (let x = 1; x <= 1000000; x++) {
    array.push(x);
  }
  res.json(array)
})


module.exports = router;
