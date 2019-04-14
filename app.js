const   express = require("express"),
        app = express(),
        request = require("request"); 

app.set("view engine","ejs");

app.get("/", (req,res) => res.render("search"));

app.get("/results", (req,res) => {
    // body...  //will display the user's input results from the omdb API
    let query = req.query.search;   //params gives route info //and query gives URL search info
    let url = "http://omdbapi.com/?s=" + query + "&apikey=thewdb"; //combine search in URL
    request(url, (error,response,body) => { //add back into request 'request'
        if(!error && response.statusCode == 200){
            let data = JSON.parse(body); 
            res.render("results", {data: data}); 
        }
    });
});

app.listen(process.env.PORT, process.env.IP, () => console.log("Movie app is listening"));