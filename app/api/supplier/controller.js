import Queue from '../../lib/Queue';

const _saveSupplier = async (req, res, next) => {
    try {
        const supplier = req.body;
        await Queue.add('jobSupplier',  supplier );
        return res.send(JSON.stringify({success: true, data: 'Sua requisição esta sendo processada em fila'}));
    } catch (e) {
        res.status(400);
        return res.send(JSON.stringify({success: false, error: e}));
    }
};
const _supplierAll = async (req, res, next, model) => {
    try {
        const data = await model.getSuppliers()
        return res.send(JSON.stringify({success: true, data: data}));
    } catch (e) {
        res.status(400);
        return res.send(JSON.stringify({success: false, error: e}));
    }
};
const _getSupplier = async (req, res, next, model) => {
    const id = req.params.id;
    try {
        const data = await model.getSupplierId(id)
        return res.send(JSON.stringify({success: true, data: data}));
    } catch (e) {
        res.status(400);
        return res.send(JSON.stringify({success: false, error: e}));
    }
};

const getController = (model) => ({
    saveSupplier: (req, res, next) => _saveSupplier(req, res, next, model),
    supplierAll: (req, res, next) => _supplierAll(req, res, next, model),
    getSupplier: (req, res, next) => _getSupplier(req, res, next, model),

});

module.exports.getController = getController;
