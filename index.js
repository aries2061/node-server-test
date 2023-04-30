const express = require("express");

const app = express();

app.get("/", (req,res) => {
    return res.status(200).json({"hello"});
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is running on port 3000`));