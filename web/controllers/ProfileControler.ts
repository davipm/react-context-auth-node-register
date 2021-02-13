import { Request, Response } from "express";
import connection from "../database/connection";

/**
 *
 * @param request
 * @param response
 * @returns {Promise<this>}
 */
export const getProfiles = async (request: Request, response: Response) => {
  try {
    const company_id = request.headers.authorization;
    const freelancers = await connection("freelancers")
      .where("company_id", company_id)
      .select("*");

    return response.status(200).json(freelancers);
  } catch (error) {
    return response.status(500).json({ error: "Server Error" });
  }
};
