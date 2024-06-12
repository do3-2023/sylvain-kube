import { Request, Response } from "express";
import pool from "../config/database";
import { log } from "console";
import { validationResult } from "express-validator";

class AlcoholController {
  constructor() {}

  async getRandomAlcohol(req: Request, res: Response) {
    const result = await pool.query(
      "SELECT name, image_url FROM alcohols ORDER BY RANDOM() LIMIT 1;"
    );
    const alcohol = result.rows[0];
    return res.status(200).send(alcohol);
  }

  async postRandomAlcohol(req: Request, res: Response) {
    // validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const insert =
      "INSERT INTO alcohols (name, image_url) VALUES($1, $2) ON CONFLICT (name) DO NOTHING;";
    const values = [req.body["name"], req.body["image_url"]];

    try {
      await pool.query(insert, values);
      res.status(201).send("Successfully inserted");
    } catch (e) {
      res.status(500).send("Insert failed");
    }
  }
}

export = new AlcoholController();
