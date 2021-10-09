//8 - Retorne todos os filmes com ratings entre 64 e 105 e divisíveis por 9 , exibindo apenas os campos title e ratings .

const filters = {
  ratings: {  $elemMatch: {$gte: 64, $lte: 105, $mod: [9,0]}  }
};
const fields = {
  title: 1, ratings: 1, _id: 0
};
const options = {};

db.movies.find(filters, fields, options)