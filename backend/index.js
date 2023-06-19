import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

mongoose
  .connect("mongodb+srv://kundansingh023230:wFBuT5t3nvAkolax@logindata.aukqdhz.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("db connected");
  })
  .catch(error => {
    console.error("Error connecting to database:", error);
  });

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

const User = mongoose.model("User", userSchema);

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    
    try {
      const user = await User.findOne({ email: email }).exec();
      if (user) {
        if (password === user.password) {
          res.send({ message: "Login Successful", user: user });
        } else {
          res.send({ message: "Password didn't match" });
        }
      } else {
        res.send({ message: "User not registered" });
      }
    } catch (error) {
      res.status(500).send({ message: "Server error" });
    }
  });
  

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  User.findOne({ email: email })
    .then((user) => {
      if (user) {
        res.send({ message: "User already registered" });
      } else {
        const newUser = new User({
          name,
          email,
          password
        });
        newUser.save()
          .then(() => {
            res.send({ message: "Successfully registered" });
          })
          .catch((error) => {
            res.send(error);
          });
      }
    })
    .catch((error) => {
      res.send(error);
    });
});

app.listen(9002, () => {
  console.log("Server started at port 9002");
});
