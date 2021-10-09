//Exercício 8: Crie um array de documentos chamado cast para o filme Home Alone com os seguintes dados:

const filters = {
  title: "Home Alone"
};

const insert = [
  {
    "actor": "Macaulay Culkin",
    "character": "Kevin"
  },
  {
    "actor": "Joe Pesci",
    "character": "Harry"
  },
  {
    "actor": "Daniel Stern"
  }
];

const fields = {
  $push: {
    cast: { $each: insert }
  }
};

const options = {};

db.movies.updateOne(filters, fields, options);