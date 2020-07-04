const QSelectAllSupplier = `SELECT * FROM suppliers WHERE 1`;

const QInsertSuppliers ='INSERT INTO suppliers ( name_supplier, doc, data_insert) VALUES (?, NOW())';

module.exports.QSelectAllSupplier = QSelectAllSupplier;
module.exports.QInsertSuppliers = QInsertSuppliers;
