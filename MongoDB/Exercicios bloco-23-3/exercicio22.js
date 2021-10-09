// 22 - Utilizando o operador $text , busque por filmes que contenham os termos "monstrous" ou "criminal" .

const filters = {
  $text: {
    $search: "monstrous criminal"
  }
};
const fields = {
};
const options = {};

db.movies.find(filters, fields, options)
