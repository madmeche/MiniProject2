const express = require('express');
const app = express();

require("dotenv").config();

let dbconnect = require('./dbConnect')

const authRoutes = require('./routes/authRoutes')
const userRoutes = require('./routes/userRoutes')
const plantRoutes = require('./routes/plantRoutes')
const folderRoutes = require('./routes/foldersRoutes')
const favoritesRoutes = require('./routes/favoritesRoutes')

const seedPlant = require('./seeds/seedPlant')

seedPlant.seedPlant()

app.use(express.json());

app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)
app.use('/api/plant', plantRoutes)
app.use('/api/folder', folderRoutes)
app.use('/api/favrotie', favoritesRoutes)

app.get("/", (req, res) => {
    res.send({message: "Welcome to Plant Assist"});
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