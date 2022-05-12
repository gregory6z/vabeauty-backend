/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from "express";

import { ServicesRepository } from "../repositories/ServicesRepository";

const servicesRoutes = Router();
const servicesRepository = new ServicesRepository();

servicesRoutes.post("/", (req, res) => {
  const { name, description } = req.body;

  servicesRepository.create({ name, description });

  return res.status(201).send();
});

servicesRoutes.get("/", (req, res) => {
  const all = servicesRepository.list();

  return res.json(all);
});

export { servicesRoutes };
