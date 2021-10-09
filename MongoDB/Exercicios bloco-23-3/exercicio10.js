//10 - Retorne somente o título de todos os filmes com dois elementos no array category .

const filters = {
  category: {$size: 2},
};
const fields = {
  title: 1, _id: 0
};
const options = {};

db.movies.find(filters, fields, options)