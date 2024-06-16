// "use server";

// import { FormSchema } from "@/components/forms/alcohol";
// import { z } from "zod";

// export async function createAlcohol(values: z.infer<typeof FormSchema>) {
//   console.log(JSON.stringify(values, null, 2));
//   const response = await fetch("/api/alcohol", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(values, null, 2),
//   });

//   return response.json();
// }
