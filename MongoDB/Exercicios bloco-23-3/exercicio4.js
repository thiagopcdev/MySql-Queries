// 4 - Adicione um array chamado ratings ao filme Godzilla com os seguintes valores: [78, 52, 95, 102] .

const filters = {
  title: "Godzilla"
};
const fields = {
    $push: {
      ratings: {  $each: [78, 52, 95, 102]  }
    }
};
const options = {};

db.movies.updateOne(filters, fields, options)