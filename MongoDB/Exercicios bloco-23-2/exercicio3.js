//Exercício 3: Remova a categoria "action" do filme Batman .

const filters = {
  title: "Batman"
};

const fields = {
  $pull: {category: "action"}
};

const options = {};

db.movies.updateOne(filters, fields, options);