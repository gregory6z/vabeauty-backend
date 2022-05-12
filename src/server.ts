import express from "express";

import { servicesRoutes } from "./routes/services.routes";

const app = express();

app.use(express.json());

app.use("/services", servicesRoutes);

app.listen(3333, () => {
  console.log("Server is running!");
});
