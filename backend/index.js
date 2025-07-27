import express from "express";
import mysql from "mysql";
import cors from "cors";
import nodemailer from "nodemailer"
const app = express();

app.use(cors());//allow frontend to use api
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234567890",
  database: "college_review",
});

app.get("/colleges", (req, res) => {
    const q = "select c.id,c.name,c.loc,c.img, avg(r.rating) avg_rating from college c join review r on c.id=r.id group by c.id;";

    db.query(q, (err, data) => {
      if (err) {
        console.log(err);
        return res.json(err);
      }
      return res.json(data);
    });
  });

app.get("/colleges/:id", (req, res) => {
    const id = req.params.id;
    const q = "select c.id,c.name,c.loc,c.img, c.mail, avg(r.rating) avg_rating from college c join review r on c.id=r.id group by c.id having c.id= ? ";
  
    db.query(q, [id], (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });
  });
app.get("/reviews/:id", (req, res) => {
    const id = req.params.id;
    const q= "select * from  review where id=? order by date desc"  
    db.query(q, [id], (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });
  });





  function generateOTP(length) {
    let otp = '';
    const characters = '0123456789'; // You can include letters if you want alphanumeric OTPs
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      otp += characters[randomIndex];
    }
  
    return otp;
  }

let verificationCodes = {};
app.post("/sendverification",(req, res)=>{

  const {id,name,fullmail,review,rating}=req.body;
  const code= generateOTP(6);
  // const code=123456;
  verificationCodes['file']={code,id,name,fullmail,review,rating}



  // sending mail
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: { user: "collegereview307@gmail.com", pass: "siuv akuz otxm agvm" },
  });
  const info=async()=>{ await transporter.sendMail({
    from: "collegereview307@gmail.com", 
    to: verificationCodes['file'].fullmail,
    subject: "Your Verification Code",
    text: `Your verification code is ${code}`
  });}
  info();
  res.json({success:true})
})

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); 
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}


// app.post("/verify",(req,res)=>{
//   const today = new Date();
//   let {passcode}=req.body;
//   passcode=Number(passcode)

//   if (passcode==verificationCodes['file'].code){
//     const q = "INSERT INTO review(`id`, `sname`, `review`, `rating`, `date`, `smail`) VALUES (?, ?, ?, ?, ?, ?)";
//     const values = [verificationCodes['file'].id, verificationCodes['file'].name, verificationCodes['file'].review, verificationCodes['file'].rating, formatDate(today),verificationCodes['file'].fullmail];
//     db.query(q, values, (err, data) => {
//         if (err) return res.json({ success: false, error: err.message });
//         return res.json({ success: true, data });
//     });
    
    
//   }
//   else{
//     res.json({success:false})
//   }
// })
app.post("/verify", (req, res) => {
  const today = new Date();
  let { passcode } = req.body;
  passcode = Number(passcode);

  if (passcode == verificationCodes['file'].code) {
    const checkQuery = "SELECT * FROM review WHERE smail = ?";
    const deleteQuery = "DELETE FROM review WHERE smail = ?";
    const insertQuery = "INSERT INTO review(`id`, `sname`, `review`, `rating`, `date`, `smail`) VALUES (?, ?, ?, ?, ?, ?)";
    const values = [
      verificationCodes['file'].id,
      verificationCodes['file'].name,
      verificationCodes['file'].review,
      verificationCodes['file'].rating,
      formatDate(today),
      verificationCodes['file'].fullmail
    ];

    // Check if the review exists for the same email
    db.query(checkQuery, [verificationCodes['file'].fullmail], (err, results) => {
      if (err) return res.json({ success: false, error: err.message });

      if (results.length > 0) {
        // If review exists, delete it
        db.query(deleteQuery, [verificationCodes['file'].fullmail], (deleteErr) => {
          if (deleteErr) return res.json({ success: false, error: deleteErr.message });

          // After deletion, insert the new review
          db.query(insertQuery, values, (insertErr, data) => {
            if (insertErr) return res.json({ success: false, error: insertErr.message });
            return res.json({ success: true, data });
          });
        });
      } else {
        // If no review exists, directly insert the new review
        db.query(insertQuery, values, (insertErr, data) => {
          if (insertErr) return res.json({ success: false, error: insertErr.message });
          return res.json({ success: true, data });
        });
      }
    });
  } else {
    res.json({ success: false, message: "Invalid passcode" });
  }
});












app.listen(8800, () => {
    console.log("Connected to backend.");
  });