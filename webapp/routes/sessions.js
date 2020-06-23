import { Router } from "express";
import { createSession } from "../controllers/SessionController";

const routes = Router();

routes.post("/sessions", createSession);

export default routes;
