import 'dotenv/config';
import express from 'express';
import product from './app/api/product/router';
import supplier from './app/api/supplier/router';
import BullBoard from 'bull-board';
import Queue from './app/lib/Queue';
import cors from 'cors';

const app = express();
app.use(cors());

BullBoard.setQueues(Queue.queues.map(queue => queue.bull));

app.use(express.json());

app.use(product.path, product.router);
app.use(supplier.path, supplier.router);

app.use('/dashboard/queues', BullBoard.UI);

app.listen(3000, () => {
  console.log('localhost:3000');
});
