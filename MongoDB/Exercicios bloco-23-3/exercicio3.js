// 3- Adicione um array chamado ratings ao filme Batman com os seguintes valores: [85, 100, 102, 105] . Dica: lembre-se do operador $each visto no dia anterior.

const filters = {
  title: "Batman"
};
const fields = {
    $push: {
      ratings: {$each: [85, 100, 102, 105]}
    }
};
const options = {};

db.movies.updateOne(filters, fields, options)