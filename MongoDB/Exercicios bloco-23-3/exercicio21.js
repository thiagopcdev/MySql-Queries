// 21 - Utilizando o operador $text , busque por filmes que contenham o termo "vacation" .

const filters = {
  $text: {
    $search: "vacation"
  }
};
const fields = {
};
const options = {};

db.movies.find(filters, fields, options)