const PORT = process.env.PORT || 3001;

const express = require("express");
const app = express();
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./Develop/public"));

const htmlRoutes = require("./Develop/routes/htmlRoutes");
const apiRoutes = require("./Develop/routes/apiRoutes");

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);


app.listen(PORT, () => {
    console.log("API server now listening on port 3001");
});