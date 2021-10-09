// 17 - Adicione o campo description no filme Home Alone com o seguinte valor: "An eight-year-old troublemaker must protect his house from a pair of burglars when he is 
  //accidentally left home alone by his family during Christmas vacation." .

const filters = {
  title: "Home Alone"
};
const fields = {
  $set: {
    description: "An eight-year-old troublemaker must protect his house from a pair of burglars when he is accidentally left home alone by his family during Christmas vacation."
  }
};
const options = {};

db.movies.updateOne(filters, fields, options)