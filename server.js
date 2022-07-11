const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());
app.use(cors(corsOptions));

// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to homepage" });
// });

require("./app/routes/tutorial.routes")(app);
// app.use("/api", require("./app/routes/tutorial.routes"));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
