// 19 - Utilizando o operador $regex , retorne todos os filmes em que a descrição termine com a palavra "humanity." .

const filters = {
  description: {$regex: /humanity.$/}
};
const fields = {
};
const options = {};

db.movies.find(filters, fields, options)