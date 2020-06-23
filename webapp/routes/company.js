import { Router } from "express";
import { getCompanys, createCompany, deleteCompany } from "../controllers/CompanyController";

const routes = Router();

routes.get("/companys", getCompanys);
routes.post("/companys", createCompany);
routes.delete("/companys/:id", deleteCompany);

export default routes;
