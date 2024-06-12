import express, { Router, Request, Response } from "express";

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.status(200).send({
    success: "true",
    message: "API REST Node.js + PostgreSQL",
    version: "1.0.0",
  });
});

router.get("/healthz", (req: Request, res: Response) => {
  const data = {
    uptime: process.uptime(),
    message: "Ok",
    date: new Date(),
  };

  res.status(200).send(data);
});

export default router;
