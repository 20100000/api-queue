import database from "../../lib/database";
import queries from "./tool/queries";

const _getProducts = async () => {
    let conn = null;
    try{
        conn = await database.getConnection(true);
        return  await database.execute(conn, queries.QSelectAllProducts);

    }catch (e) {
        //todo
    }finally {
        database.closeConn(conn);

    }
}

const _insertProduct = async (product) => {
    let conn = null;
    try{
        console.log('model',product);

        conn = await database.getConnection(true);
        const res = await database.execute(conn, queries.QInsertProducts, [product.name, product.description, product.supplier_id]);
        return res.insertId;
    }catch (e) {
        //todo
    }finally {
        database.closeConn(conn);
    }
}

module.exports.getProducts =_getProducts;
module.exports.insertProduct =_insertProduct;
