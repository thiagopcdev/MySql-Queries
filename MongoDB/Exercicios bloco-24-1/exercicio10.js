db.vendas.aggregate([
  {
    $match: {
      status: {$in: ["ENTREGUE", "EM SEPARACAO"]},
    }
  },
  {
    $group: {
      _id: "$clienteId",
      qntCompras: {$sum: 1}
    }
  },
  {
    $match: { qntCompras: {$gt: 5}}
  },
  {
    $group: {
      _id: null,
      clientes: { $sum: 1 }
    }
  },
  {
    $project: { _id: 0 },
  },
]);


// OR

db.vendas.aggregate([
  {
    $match: {
      status: {$in: ["ENTREGUE", "EM SEPARACAO"]},
    }
  },
  {
    $group: {
      _id: "$clienteId",
      qntCompras: {$sum: 1}
    }
  },
  {
    $match: { qntCompras: {$gt: 5}}
  },
  {
    $count: 'clientes'
  },
]);