const express = require("express");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// const htmlRoutes = require("./routes/htmlRoutes");

// app.use("/", htmlRoutes);

app.listen(PORT, () => {
    console.log("API server now listening on port 3001");
});