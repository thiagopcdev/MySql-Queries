// 18 - Utilizando o operador $regex , retorne todos os filmes em que a descrição comece com a palavra "The" .

const filters = {
  description: {$regex: /^The/}
};
const fields = {
};
const options = {};

db.movies.find(filters, fields, options)