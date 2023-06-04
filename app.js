const express=require("express");
const bodyParser=require("body-parser");
const app=express();


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

let items=["Cook Food"];
let workItems=[];
//get means when the user tries to access the home route
app.get("/",function(req,res){
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
   var today  = new Date();
   var day=today.toLocaleDateString("en-US"); // 9/17/2016
    res.render("list",{dday:day,newItemList:items});
})
//now  suppose we had to make similar html files for all days of the week so it would not be in good practise to make so many html files with similar content so thats why we use ejs:embedded javascript templating
app.post("/",function(req,res){
   newItem=req.body.newItem;
   if(req.body.list==="Work List")
   {
    workItems.push(newItem);
    res.redirect("/work")
   }
   else
   {
   items.push(newItem);
   res.redirect("/");
   }
})
app.get("/work",function(req,res){
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
   var today  = new Date();
   var day=today.toLocaleDateString("en-US"); // 9/17/2016
    res.render("list",{dday:"Work List",newItemList:workItems});
})
app.get("/about",function(req,res){
     res.render("about");
})
app.listen(6969,function(){
    console.log("server started at port 6969");
})