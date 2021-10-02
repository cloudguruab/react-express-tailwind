import express from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

const TEMPLATE_DIR = path.resolve(__dirname, "public");
const HTML_FILE = path.resolve(TEMPLATE_DIR, "index.html");

app.use(express.json());
app.use(express.static("public"));
app.use(express.static("dist"));

app.get("/", (req, res) => {
    res.sendFile(HTML_FILE, function(err){
       if(err){
          res.status(500).send(err);
       }
    });
});