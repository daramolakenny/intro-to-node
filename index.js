import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello Page</h1>");
})

app.post("/register", (req, res) => {
    res.sendStatus(201);
})

app.put("/user/kenny", (req, res) => {
    res.sendStatus(200);
})

app.patch("/user/kenny", (req, res) => {
    res.sendStatus(200);
});

app.delete("/user/kenny", (req, res) => {
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
