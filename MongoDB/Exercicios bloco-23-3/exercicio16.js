// 16 - Adicione o campo description no filme Godzilla com o seguinte valor: "The world is beset by the appearance of monstrous creatures, but one of them may be the 
  //only one who can save humanity." .

const filters = {
  title: "Godzilla"
};
const fields = {
  $set: {
    description: "The world is beset by the appearance of monstrous creatures, but one of them may be the only one who can save humanity."
  }
};
const options = {};

db.movies.updateOne(filters, fields, options)