db.vendas.aggregate([
  {
    $match: {
      status: {$in: ["ENTREGUE", "EM SEPARACAO"]},
      dataVenda: {
        $gte: ISODate("2019-01-01"),
        $lte: ISODate("2019-12-31")
      }
    }
  },
  {
    $lookup: {
      from: 'clientes',
      localField: 'clienteId',
      foreignField: 'clienteId',
      as: 'dadosCliente'
    }
  },
  {
    $unwind: "$dadosCliente"
  },
  {
    $group: {
      _id: "$dadosCliente.endereco.uf",
      mediaVendas: {$avg: "$valorTotal"},
      qntCompras: {$sum: 1}
    }
  },
  { $sort: { qntCompras: -1 } },
  { $project: { _id: 1, mediaVendas: 1, qntCompras: 1} },
  { $limit: 3 }
]);