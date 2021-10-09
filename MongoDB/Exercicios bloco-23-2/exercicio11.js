//Exercício 11: Produza três querys para o filme Batman :

//Adicione o campo actor , que deve ser um array com o valor Christian Bale , ao array de cast em que o campo character seja igual a Batman ;  

let filters = {
  title: "Batman",
  "cast.character": "Batman"
};

let fields = {
   $push: {"cast.$.actor": "Christian Bale"}
};

let options = {};

db.movies.updateOne(filters, fields, options)

//Adicione o campo actor , que deve ser um array com o valor Michael Caine , ao array de cast em que o campo character seja igual a Alfred ;

filters = {
  title: "Batman",
  "cast.character": "Alfred"
};

fields = {
   $push: {"cast.$.actor": "Michael Caine"}
};

options = {};

db.movies.updateOne(filters, fields, options);

//Adicione o campo actor , que deve ser um array com o valor Heath Ledger , ao array de cast em que o campo character seja igual a Coringa .

filters = {
  title: "Batman",
  "cast.character": "Coringa"
};

fields = {
   $push: {"cast.$.actor": "Heath Ledger"}
};

options = {};

db.movies.updateOne(filters, fields, options);