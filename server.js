const cors = require("cors");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.use(cors({
    origin: "*"
}));

const botRouter = require("./src/routes/route.js");

app.use(botRouter);

app.listen(PORT, () => console.log(`🚀 BackEnd server is running http://localhost:` + PORT));
