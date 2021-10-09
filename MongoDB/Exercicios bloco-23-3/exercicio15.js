// 15 - Adicione o campo description no filme Batman com o seguinte valor: "The Dark Knight of Gotham City begins his war on crime with his first major enemy being 
  //Jack Napier, a criminal who becomes the clownishly homicidal Joker." .

const filters = {
  title: "Batman"
};
const fields = {
  $set: {
    description: "The Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker."
  }
};
const options = {};

db.movies.updateOne(filters, fields, options)