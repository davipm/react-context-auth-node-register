import { Router } from "express";
import { getProfiles } from "../controllers/ProfileControler";

const routes = Router();

routes.get("/profile", getProfiles);

export default routes;
