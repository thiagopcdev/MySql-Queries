//Exercício 1: Adicione a categoria "superhero" ao filme Batman.

const filters = {
  title: "Batman"
};

const fields = {
  $push: {category: "superhero"}
};

const options = {};

db.movies.updateOne(filters, fields, options);