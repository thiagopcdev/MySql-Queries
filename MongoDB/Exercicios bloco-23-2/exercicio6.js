//Exercício 6: Adicione o elemento "action" ao array category do filme Batman , garantindo que esse valor não se duplique.

const filters = {
  title: "Batman"
};

const fields = {
  $addToSet: {category: "action"}
};

const options = {};

db.movies.updateOne(filters, fields, options);