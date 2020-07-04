import model from '../api/product/model'
export default {
    key: 'jobProduct',
    async handle(  job  ) {
         model.insertProduct(job.data);
    },
};
