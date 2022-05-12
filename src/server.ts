import express from "express";

import { servicesRoutes } from "./routes/services.routes";

const app = express();

app.use(express.json());

app.use(servicesRoutes);

app.listen(333, () => {
  console.log("Server is running!");
});
