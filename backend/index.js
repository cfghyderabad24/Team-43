import express from "express";
import cors from 'cors';
import "dotenv/config";
import mongoose from "mongoose";
import userRoute from "./routes/UserRoute.js";
import loginRouter from "./routes/authRoute.js";
import sendEmail from "./utils/sendEmail.js";
import path from 'path'
const __dirname = import.meta.dirname;

const app = express()
app.use(cors())

// app.use(express.static(path.join(__dirname, '../frontend/build')))

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("Connected to database!"))
    .then(() => app.listen(process.env.PORT || 8000, () => console.log("Server running at port 8000!")))

app.use(express.json())
// app.use(cors())

//

app.use("/api/user", userRoute)
app.use("/api/auth", loginRouter)


app.post("/api/payment/sendemail", async (req, res) => {
    const { email } = req.body;
  
    try {
      const send_to = email;
      const sent_from = process.env.EMAIL_USER;
      const reply_to = email;
      const subject = "Thank You Message From Good Universe";
      const message = `
          <h3>Hello!</h3>
          <p>Payment Successful!</p>
          <p>Regards...</p>
      `;
  
      await sendEmail(subject, message, send_to, sent_from, reply_to);
      res.status(200).json({ success: true, message: "Email Sent" });
    } catch (error) {
      res.status(500).json(error.message);
    }
  });

//

// app.use((req, res, next) => {
//     res.sendFile(path.join(__dirname, '../frontend/build/index.html'))
// })