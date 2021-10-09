// 11 - Retorne somente o título de todos os filmes com quatro elementos no array ratings .

const filters = {
  ratings: {$size: 4},
};
const fields = {
  title: 1, _id: 0
};
const options = {};

db.movies.find(filters, fields, options)