//Exercício 4: Remova o primeiro elemento do array category do filme Batman .

const filters = {
  title: "Batman"
};

const fields = {
  $pop: {category: -1}
};

const options = {};

db.movies.updateOne(filters, fields, options);