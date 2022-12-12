import {Router} from "express";
import AuctionsController from "../controllers/auction-controller.js";

const auctionsRouter = new Router();

auctionsRouter.get('/', AuctionsController.getAll);
auctionsRouter.get('/:id', AuctionsController.getOne);

export default auctionsRouter;