const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js");
// el anterior codigo llama el modulo date.js

const app = express();

let items = ["Buy Food", "Cook Food", "Eat Food"];
let workItems = [];

app.set('view engine', 'ejs');
// la anterior instruccion es para que vea ejs

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));
//este codigo me lleva a la carpeta publica que tiene el css

app.get("/", function(req, res) {

let day = date.getDate() ;

  res.render("list", {
    listTitle: day,
    newListItems: items
  });
  // paso la variable de este archivo a list, tomo la variable day y la paso a kindOfDay
});
// vamos a enviar el valor de day al ejs

app.post("/", function(req, res) {

  let item = req.body.newItem;
  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }

});

app.get("/work", function(req, res) {
  res.render("list", {
    listTitle: "Work List",
    newListItems: workItems
  });
});
// La anterior seccion abre una nueva pagina con titulo work

app.post("/work", function(req, res) {
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
