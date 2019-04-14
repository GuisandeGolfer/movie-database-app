var express = require("express");
var app = express(); 
var request = require("request"); 

app.set("view engine","ejs");

app.get("/", function(req,res){
   res.render("search");  
});

app.get("/results", function (req,res) {
    // body...  //will display the user's input results from the omdb API
    var query = req.query.search;   //params gives route info //and query gives URL search info
    var url = "http://omdbapi.com/?s=" + query + "&apikey=thewdb"; //combine search in URL
    request(url, function(error,response,body){ //add back into request 'request'
        if(!error && response.statusCode == 200){
            var data = JSON.parse(body); 
            res.render("results", {data: data}); 
        }
    });
    
});














app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Movie app is listening");
})