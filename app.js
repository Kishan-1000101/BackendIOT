
const express = require("express")
const app = express();
const axios = require("axios")


app.use(express.json());

app.use(express.static("public"))

app.use((req,res)=>{
    res.status(404)
    res.send(`<h1>Error 404: resource not found</h1>`)
})

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
