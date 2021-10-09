//Exercício 9: Adicione o campo character com o valor Marv ao array de cast em que o campo actor seja igual a Daniel Stern no filme Home Alone .

const filters = {
  "cast.actor": "Daniel Stern",
  title: "Home Alone"
};

const fields = {
  $set: {"cast.$.character": "Marv"}
};

const options = {};

db.movies.updateOne(filters, fields, options);