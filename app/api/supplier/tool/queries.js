const QSelectAllSupplier = `SELECT * FROM suppliers WHERE 1`;

const QSelectSupplier = `SELECT s.id, s.name_supplier, s.doc, p.id AS product_id, p.name, p.description, p.data_insert 
FROM suppliers AS s LEFT JOIN products AS p ON s.id = p.supplier_id WHERE s.id = ?`;

const QInsertSuppliers ='INSERT INTO suppliers ( name_supplier, doc, data_insert) VALUES (?, NOW())';

module.exports.QSelectAllSupplier = QSelectAllSupplier;
module.exports.QInsertSuppliers = QInsertSuppliers;
module.exports.QSelectSupplier = QSelectSupplier;
