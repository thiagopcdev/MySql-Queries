//Exercício 10: Crie um array de documentos chamado cast para o filme Batman com os seguintes dados:

const filters = {
  title: "Batman"
};

const insert = [
  {
    "character": "Batman"
  },
  {
    "character": "Alfred"
  },
  {
    "character": "Coringa"
  }
];

const fields = {
  $push: {cast: {$each: insert}}
};

const options = {};

db.movies.updateOne(filters, fields, options);