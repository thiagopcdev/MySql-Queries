// 9 - Retorne os filmes da categoria adventure e com ratings maior do que 103 , exibindo apenas os campos title , ratings e category .

const filters = {
  category: {$all: ["adventure"]},
  ratings: {  $elemMatch: {$gte: 103}  }
};
const fields = {
  title: 1, ratings: 1, category: 1, _id: 0
};
const options = {};

db.movies.find(filters, fields, options)