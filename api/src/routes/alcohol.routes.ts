import express, { Router } from "express";
import alcoholController from "../controllers/alcohol.controller";

const router: Router = express.Router();

router.get(
  "/alcohol",
  alcoholController.getRandomAlcohol.bind(alcoholController)
);

export default router;
