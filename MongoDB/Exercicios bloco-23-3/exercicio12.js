// 12 - Busque os filmes em que o módulo 5 do campo budget seja 0 e que o array category tenha tamanho 2 .

const filters = {
  budget: {$mod: [5, 0]},
  category: {$size: 2}
};
const fields = {
};
const options = {};

db.movies.find(filters, fields, options)