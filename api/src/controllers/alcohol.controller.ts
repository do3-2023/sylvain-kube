import { Request, Response } from "express";
import pool from "../config/database"

class AlcoholController {
  constructor() { }

  async getRandomAlcohol(req: Request, res: Response) {
    const result = await pool.query('SELECT name, image_url FROM alcohols ORDER BY RANDOM() LIMIT 1;')
    const alcohol = result.rows[0];
    return res.status(200).send(alcohol);
  }
}

export = new AlcoholController();
