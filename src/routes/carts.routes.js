import { Router } from "express";
import passport from "passport";
import CartController from '../controller/carts.controller.js';
import TicketController from "../controller/tickets.controller.js";

const cc = new CartController();
const tc = new TicketController();

const router = Router();

router.get('/', cc.get);

router.get('/:cid', cc.getOne);

router.post('/', cc.post);

router.put('/:cid', cc.put);

router.put('/:cid/product/:pid', cc.putProduct);

router.delete('/:cid/product/:pid', cc.deleteProduct);

router.delete('/:cid', cc.delete);

router.post('/:cid/purchase', passport.authenticate('jwt', {session: false}), cc.postPurchase);

export default router;