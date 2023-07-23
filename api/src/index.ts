import express, { Express } from "express";
import cors from "cors";
import index from "./routes/index.routes";
import alcohol from "./routes/alcohol.routes";

// Create an instance of the Express app
const app: Express = express();

// Set up middleware for parsing incoming requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "100mb" }));

// Enable CORS for all routes
app.use(
  cors({
    origin: process.env.BASE_URL,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
    credentials: true,
  })
);

// Mount the API routes
app.use("/api", index);
app.use("/api", alcohol);

// Run server
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is connected on ${port}`);
});
