import Queue from '../../lib/Queue';

const _saveProduct = async (req, res, next, model) => {
    try {
        const product = req.body;
        await Queue.add('jobProduct',  product );
        return res.send(JSON.stringify({success: true, data: 'Sua requisição esta sendo processada em fila'}));
    } catch (e) {
        res.status(400);
        return res.send(JSON.stringify({success: false, error: e}));
    }
};

const _productAll = async (req, res, next, model) => {
    try {
        const data = await model.getProducts();

        return res.send(JSON.stringify({success: true, data: data}));
    } catch (e) {
        res.status(400);
        return res.send(JSON.stringify({success: false, error: e}));
    }
};

const getController = (model) => ({
    saveProduct: (req, res, next) => _saveProduct(req, res, next, model),
    productAll: (req, res, next) => _productAll(req, res, next, model),
});

module.exports.getController = getController;
