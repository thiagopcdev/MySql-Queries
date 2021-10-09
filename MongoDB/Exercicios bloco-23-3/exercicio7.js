// 7 - Retorne todos os filmes com ratings entre 100 e 105 , exibindo apenas os campos title e ratings .

const filters = {
  ratings: {  $elemMatch: {$gte: 100, $lte: 105}  }
};
const fields = {
  title: 1, ratings: 1, _id: 0
};
const options = {};

db.movies.find(filters, fields, options)