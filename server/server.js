const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
require("./config/mongoose.config");
app.use(express.json(), express.urlencoded({ extended: true }), cors());
require("./routes/pet.routes")(app);

app.listen(port, () => console.log(`Listening on port: ${port}`));
