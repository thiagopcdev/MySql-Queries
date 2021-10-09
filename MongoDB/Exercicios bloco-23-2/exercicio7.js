//Exercício 7: Adicione a categoria "90's" aos filmes Batman e Home Alone .

const filters = {
  title: {$in: ["Batman", "Home Alone"]}
};

const fields = {
  $addToSet: {  category: "90's"  }
};

const options = {};

db.movies.updateMany(filters, fields, options);