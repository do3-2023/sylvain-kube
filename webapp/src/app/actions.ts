"use server";

import { FormSchema } from "@/components/forms/alcohol";
import { z } from "zod";

const API_URL = process.env.API_URL || "http://api.back.svc.cluster.local";

export type Alcohol = {
  name: string;
  image_url: string;
};

export async function getRandomAlcohol() {
  const res = await fetch(`${API_URL}/api/item`);
  let alcohol: Alcohol = await res.json();

  return alcohol;
}

export async function createAlcohol(values: z.infer<typeof FormSchema>) {
  try {
    const response = await fetch(`${API_URL}/api/item`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values, null, 2),
    });

    if (!response.ok) {
      throw response.status;
    }
  } catch (error: any) {
    if (error === 409) {
      throw new Error(`Error: Name already exists, must be unique.`);
    } else {
      throw new Error(`Error: Internal server error.`);
    }
  }
}
