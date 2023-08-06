const express = require("express");
const app = express();

require("dotenv").config();

let dbconnect = require('./dbConnect')

const authRoutes = require('./routes/authRoutes')
const userRoutes = require('./routes/userRoutes')

app.use(express.json());

app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)


app.get("/", (req, res) => {
    res.json({message: "Welcome to Plant Assist"});
});

// app.post('/users', (req, res) => {
//     const { name, email, password } = req.body;
//     // create user logic here
//     res.send('User created successfully!');
//   });

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});