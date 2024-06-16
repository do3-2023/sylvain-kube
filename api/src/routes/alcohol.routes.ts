import express, { Router } from "express";
import alcoholController from "../controllers/alcohol.controller";
import { body } from "express-validator";

const router: Router = express.Router();

router.get(
  "/alcohol",
  alcoholController.getRandomAlcohol.bind(alcoholController)
);

router.post(
  "/alcohol",
  body("name")
    .isString()
    .bail()
    .isLength({ max: 30, min: 1 })
    .bail()
    .notEmpty()
    .bail()
    .exists(),
  body("image_url")
    .isURL()
    .bail()
    .isLength({ max: 180, min: 1 })
    .bail()
    .notEmpty()
    .bail()
    .exists(),
  body("description")
    .isString()
    .bail()
    .isLength({ max: 200, min: 1 })
    .bail()
    .notEmpty()
    .bail()
    .exists(),
  alcoholController.postRandomAlcohol.bind(alcoholController)
);

export default router;
