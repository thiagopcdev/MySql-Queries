// 14 - Retorne os filmes em que o ratings possua tamanho 4 e que seja da category "adventure" ou "family" , mas que não tenha o imdbRating menor que 7.

const filters = {
  ratings: {$size: 4 },
  category: {$in: ["adventure","family"]},
  imdbRating: {$not: {$lt: 7}}
};
const fields = {

};
const options = {};

db.movies.find(filters, fields, options)