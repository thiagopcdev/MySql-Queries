// 23 - Utilizando o operador $text , busque por filmes que contenham a frase "when he is accidentally" .

const filters = {
  $text: {
    $search: "\"when he is accidentally\""
  }
};
const fields = {
};
const options = {};

db.movies.find(filters, fields, options)
