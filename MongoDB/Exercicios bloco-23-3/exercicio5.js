// 5- Adicione um array chamado ratings ao filme Home Alone com os seguintes valores: [200, 99, 65]

const filters = {
  title: "Home Alone"
};
const fields = {
    $push: {
      ratings: {  $each: [200, 99, 65]  }
    }
};
const options = {};

db.movies.updateOne(filters, fields, options)