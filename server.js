const express = require("express");
const cors = require('cors')
const PORT = process.env.PORT || 3005;




const app = express();


app.use(cors())
app.use(express.urlencoded({ extended: true }));


app.use(express.static("build"));






app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});