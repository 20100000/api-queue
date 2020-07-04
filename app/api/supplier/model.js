import database from "../../lib/database";
import queries from "./tool/queries";

const _getSuppliers = async () => {
    let conn = null;
    try{
        conn = await database.getConnection(true);
        return  await database.execute(conn, queries.QSelectAllSupplier);

    }catch (e) {
        //todo
    }finally {
        database.closeConn(conn);

    }
}

const _insertSupplier = async (supplier) => {
    let conn = null;
    try{
        console.log('model suppliersssssssssss', supplier);
        conn = await database.getConnection(true);
        const res = await database.execute(conn, queries.QInsertSuppliers, [supplier.name, supplier.doc]);
        return res.insertId;
    }catch (e) {
        //todo
    }finally {
        database.closeConn(conn);
    }
}

module.exports.getSuppliers =_getSuppliers;
module.exports.insertSupplier =_insertSupplier;
