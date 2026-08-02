const express=require("express");
const path=require("path");
const bodyParser=require("body-parser");

const app=express();

const PORT=3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,"public")));

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"public","index.html"));
});

app.get("/about",(req,res)=>{
    res.sendFile(path.join(__dirname,"public","about.html"));
});

app.get("/products",(req,res)=>{
    res.sendFile(path.join(__dirname,"public","products.html"));
});

app.get("/gallery",(req,res)=>{
    res.sendFile(path.join(__dirname,"public","gallery.html"));
});

app.get("/certifications",(req,res)=>{
    res.sendFile(path.join(__dirname,"public","certifications.html"));
});

app.get("/faq",(req,res)=>{
    res.sendFile(path.join(__dirname,"public","faq.html"));
});

app.get("/contact",(req,res)=>{
    res.sendFile(path.join(__dirname,"public","contact.html"));
});

const enquiryRoute=require("./routes/enquiry");

app.use("/",enquiryRoute);

app.listen(PORT,()=>{

console.log(`Server Running : http://localhost:${PORT}`);

});