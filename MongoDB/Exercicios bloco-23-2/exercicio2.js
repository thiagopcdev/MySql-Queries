//Exercício 2: Utilizando o modificador $each , adicione as categorias "villain" e "comic-based" ao filme Batman .

const filters = {
  title: "Batman"
};

const fields = {
  $push: {category: {$each: ["villain","comic-based"]}}
};

const options = {};

db.movies.updateOne(filters, fields, options);