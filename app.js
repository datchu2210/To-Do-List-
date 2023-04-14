const express = require('express')
const app = express()
const body_parser = require('body-parser')
const date = require(__dirname+"/date.js")

app.use(body_parser.urlencoded({extended:true}))
app.set('view engine','ejs');
app.use(express.static("public"))

const items = ['Workout','Eat','Work'];
const workItems = []

app.get('/',function(req,res){
let datetu = date.getDate()
res.render('list',{'Day':datetu,item:items})
});


app.post('/',function(req,res){
  item=req.body.item
  items.push(item);
  res.redirect("/")
})


app.get('/work',function(req,res){
  res.render('list',{Day:'Work List',item:workItems})
});

app.post('/work',function(req,res){
  item=req.body.item
  workItems.push(item);
  res.redirect("/work")
})

app.listen(3000,function(){
  console.log('Server Started')
})
