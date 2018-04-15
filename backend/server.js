
var http=require('http');
var express=require('express');
var bodyParser=require('body-parser');
var mongodb=require('mongodb');
var cors=require("cors");

var app=express();

app.use(bodyParser.json());
app.use(cors());

mongodb.connect("mongodb://localhost:27017", (err,client)=>{
  
    const db=client.db("eventsDB");

    app.get("/api/events",(req,resp)=>{
        db.collection("events").find({})
            .toArray((err,events)=>{
                resp.json(events);
            });
    });

    app.post("/api/events", (req,resp)=>{
        db.collection("events").insertOne(req.body, (err,result)=>{
            if(err){
                resp.status(500).json({
                    error:"Failed to add event data"
                })
            }else{
                resp.status(201).json(result.ops[0]);
            }
        });
    });
    
    app.get("/api/events/:id",(req,resp) => {
        let searchId = req.params.id;
        db.collection("events")
            .findOne({ id: searchId},null,(err,result) => {
            if(err){
                resp.status(500).json({error:"Error in Searching Data"});
            } else{
                resp.json(result);
            }
        })
    });

    app.put("/api/events/:id",(req,res)=>{
        let updateId = req.params.id;
        console.log(req.param);
        db.collection("events")
            .findOneAndUpdate(
                {id:updateId}, req.body,(err, result) => {
                    if(err){
                        res.status(500).json({error:"Error in update"});
                    } else {
                        res.json(result);
                    }
                }
            )
    });

    app.listen(8080, (err)=>{
        if(err){
            console.log("Error, Couldnot start server");
            return;
        }
        console.log("Server started at localhost:8080")
    })
})

