const QSelectAllProducts = `SELECT * FROM products WHERE 1`;

const QInsertProducts ='INSERT INTO products ( name, description, supplier_id, data_insert) VALUES (?, NOW())';


module.exports.QSelectAllProducts = QSelectAllProducts;
module.exports.QInsertProducts = QInsertProducts;
