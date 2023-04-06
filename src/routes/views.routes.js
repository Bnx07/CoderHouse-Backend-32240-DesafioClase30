import { Router } from "express";
import { cookieExtractor } from '../config/passport.config.js';
import passport from "passport";

import ViewController from "../controller/views.controller.js";

const router = Router();
const vc = new ViewController();

router.get('/', passport.authenticate('jwt', {session: false}), vc.get)

router.get('/carts/:cid', passport.authenticate('jwt', {session: false}), vc.getCart)

router.get('/product/:pid', passport.authenticate('jwt', {session: false}), vc.getProduct)

router.get('/register', vc.getRegister)

router.get('/login', vc.getLogin)

router.get('/user', passport.authenticate('jwt', {session: false}), vc.getUser)

router.get('/test', (req, res) => {
    if (!req.cookies.coderCookieToken) console.log("Hi");
    res.send("Hi");
    // Tengo que quitarla
})

// const middlewareQueRecibeCookie = () => {
//     if (req.user.user.role == 'user') {
//         console.log("Im a user");
//     }
//     if (req.user.user.role == 'admin') {
//         console.log("Im an admin");
//     }
// }

// router.get('/test2', passport.authenticate('jwt', {session: false}), middlewareQueRecibeCookie(), (req, res) => {})

router.get('*', vc.getAll)

export default router;