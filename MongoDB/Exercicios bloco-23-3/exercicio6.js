//6 - Retorne todos os filmes com ratings maior do que 103 , exibindo apenas os campos title e ratings .

const filters = {
  ratings: {  $elemMatch: {$gt: 103}  }
};
const fields = {
  title: 1, ratings: 1, _id: 0
};
const options = {};

db.movies.find(filters, fields, options)