// 13 - Retorne os filmes da categoria "sci-fi" ou que possua o ratings maior do que 199 , exibindo apenas os campos title , ratings e category .

const filters = {
  $or: [
    { ratings: {$elemMatch: { $gte: 199 }}},
    { category: "sci-fi"  }
  ]
};
const fields = {
  title: 1, category: 1, ratings: 1, _id: 0
};
const options = {};

db.movies.find(filters, fields, options)