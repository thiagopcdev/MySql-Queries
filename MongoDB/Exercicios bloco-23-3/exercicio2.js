// 2- Agora retorne os filmes que contenham action no array category e possuem nota do IMDB maior do que 7 .

const filters = {
  category: "action",
  imdbRating: {$gt: 7}
};
const fields = {};
const options = {};

db.movies.find(filters, fields, options)