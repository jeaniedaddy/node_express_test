const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

 
router.get('/datatable',function(req,res){
  res.sendFile(path.join(__dirname+'/datatable.html'));
});

router.get('/',function(req,res){
  console.log('dirname:' + __dirname);
  res.send('Hello world!');

});
 
router.get('/about',function(req,res){
  res.sendFile(path.join(__dirname+'/about.html'));
});
 
router.get('/sitemap',function(req,res){
  res.sendFile(path.join(__dirname+'/sitemap.html'));
});
 
//add the router
app.use('/', router);
app.listen(process.env.port || 3000);
 
console.log('Running at Port 3000');