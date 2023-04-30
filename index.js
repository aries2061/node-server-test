const express = require("express");

const app = express();

app.get("/", (req,res) => {
    const data = {
        "Greeting": "Welcome"
    };
    return res.status(200).json(data);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is running on port 3000`));