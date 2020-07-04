import express from 'express';
import Controller from './controller';
import model from './model';
const PATH = '/supplier';

const router = express.Router();

const controller = Controller.getController(model);
router.get('/', controller.supplierAll);
router.post('/', controller.saveSupplier);

module.exports = { path: PATH, router };
