const express=require('express');
const router=express.Router();
const ItemsController=require('../controllers/items');
router.get('/Items',ItemsController.getAllItems);
router.get('/Items/:id',ItemsController.getItemsById);
router.post('/Items',ItemsController.createItem);
router.put('/Items/:id',ItemsController.updateItem);
router.delete('/Items/:id',ItemsController.deleteItem);
module.exports=router;