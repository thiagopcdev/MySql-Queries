//1 - Utilizando o operador $all , retorne todos os filmes que contenham action e adventure no array category .

const filters = {
  category: {$all: ["action", "adventure"]}
};
const fields = {};
const options = {};

db.movies.find(filters, fields, options)