import model from '../api/supplier/model'

export default {
    key: 'jobSupplier',
    async handle( data  ) {
        model.insertSupplier(data.data);
    },
};
