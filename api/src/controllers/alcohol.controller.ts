import { Request, Response } from "express";
import pool from "../config/database";
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
      "INSERT INTO alcohols (name, image_url, description) VALUES($1, $2, $3);";
    const values = [
      req.body["name"],
      req.body["image_url"],
      req.body["description"],
    ];

    try {
      console.log("sdssdsdsd");

      await pool.query(insert, values);
      res.status(201).send("Successfully inserted");
    } catch (e: any) {
      if (e.code === "23505") {
        // PostgreSQL unique violation error code
        res.status(409).json("Conflict: Alcohol with this name already exists");
      } else {
        res.status(500).json("Failed to create or insert data");
      }
    }
  }
}

export = new AlcoholController();
