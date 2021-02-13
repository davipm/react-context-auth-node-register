import { Router } from "express";
import {
  deleteFreelancer,
  getFreelancer,
  registerFreelancer,
} from "../controllers/FreelancerController";

const routes = Router();

routes.get("/freelancer", getFreelancer);
routes.post("/freelancer", registerFreelancer);
routes.delete("/freelancer/:id", deleteFreelancer);

export default routes;
