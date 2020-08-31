import { Router } from "express";
import {
  getFreelancer,
  registerFreelancer,
  deleteFreelancer,
} from "../controllers/FreelancerController";

const routes = Router();

routes.get("/freelancer", getFreelancer);
routes.post("/freelancer", registerFreelancer);
routes.delete("/freelancer/:id", deleteFreelancer);

export default routes;
