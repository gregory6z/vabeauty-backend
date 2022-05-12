import { Router } from "express";

const servicesRoutes = Router();

const services = [];

servicesRoutes.post("/services", (req, res) => {
  const { name, description } = req.body;

  services.push({
    name,
    description,
  });

  return res.status(201).send();
});

export { servicesRoutes };
