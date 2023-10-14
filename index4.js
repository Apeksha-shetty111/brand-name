import express from "express";
import bodyParser from "body-parser";
import {dirname }from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}))

// function brandname(req,res,next){
//   bandname=req.body["street"]+req.body["pet"];
//   next();
// }

// app.use(brandname);

app.get("/",(req, res)=>{
   res.sendFile(__dirname +"/public/index.html");
  
})

app.post("/submit",(req,res)=>{
  const bandname = req.body['street'] + " " + req.body["pet"];
  res.send("<h1> your band name is <h1>"+bandname);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
