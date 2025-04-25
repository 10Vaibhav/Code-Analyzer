const express = require("express");
const aiRoutes = require("./routes/ai.routes")

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/ai', aiRoutes);

app.get('/', (req, res)=> {
    res.send("Dummy Route");
});



module.exports = app;

