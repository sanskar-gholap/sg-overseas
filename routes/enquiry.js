const express=require("express");

const router=express.Router();

const nodemailer=require("nodemailer");

require("dotenv").config();

router.post("/enquiry",(req,res)=>{

const{name,email,phone,country,product,message}=req.body;

const transporter=nodemailer.createTransport({

service:"gmail",

auth:{

user:process.env.EMAIL,

pass:process.env.PASSWORD

}

});

const mailOptions={

from:process.env.EMAIL,

to:process.env.EMAIL,

subject:"New Enquiry From SG Companies",

html:`

<h2>New Enquiry</h2>

<p><b>Name :</b> ${name}</p>

<p><b>Email :</b> ${email}</p>

<p><b>Phone :</b> ${phone}</p>

<p><b>Country :</b> ${country}</p>

<p><b>Product :</b> ${product}</p>

<p><b>Message :</b> ${message}</p>

`

};

transporter.sendMail(mailOptions,(err,info)=>{

if(err){

return res.send("Error");

}

res.send("Enquiry Submitted Successfully");

});

});

module.exports=router;