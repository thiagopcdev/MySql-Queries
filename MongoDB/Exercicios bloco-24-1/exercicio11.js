db.vendas.aggregate([
  {
    $match: {
      status: {$in: ["ENTREGUE", "EM SEPARACAO"]},
      dataVenda: {
        $gte: ISODate("2020-01-01"),
        $lte: ISODate("2020-03-31")
      }
    }
  },
  {
    $group: {
      _id: "$clienteId",
      qntCompras: {$sum: 1}
    }
  },
  {
    $match: { qntCompras: {$lt: 3}}
  },
  {
    $count: 'clientes'
  },
]);