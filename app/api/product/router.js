import express from 'express';
import Controller from './controller';
import model from './model';

const PATH = '/product';

const router = express.Router();

const controller = Controller.getController(model);
router.get('/', controller.productAll);
router.post('/', controller.saveProduct);

module.exports = { path: PATH, router };
