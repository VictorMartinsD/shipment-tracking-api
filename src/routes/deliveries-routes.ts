import { Router } from "express";
import { DeliveriesController } from "@/controllers/deliveries-controller.js";
import { ensureAuthenticated } from "@/middlewares/ensure-authenticated.js";
import { verifyUserAuthorization } from "@/middlewares/verifyUserAuthorization.js";

const deliveriesRoutes = Router();
const deliveriesController = new DeliveriesController();

deliveriesRoutes.use(ensureAuthenticated, verifyUserAuthorization(["sale"]));
deliveriesRoutes.post("/", deliveriesController.create);

export { deliveriesRoutes };
