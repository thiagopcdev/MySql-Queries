//Exercício 12: Adicione aos atores de cast do character Batman do filme Batman os valores "Michael Keaton" , "Val Kilmer" e "George Clooney" , e deixe o array em ordem alfabética.

const filters = {
  title: "Batman",
  "cast.character": "Batman"
};

const insert = ["Michael Keaton", "Val Kilmer", "George Clooney"];

const fields = {
   $push: {"cast.$.actor": { $each: insert, $sort: 1}}
};

const options = {};

db.movies.updateOne(filters, fields, options);