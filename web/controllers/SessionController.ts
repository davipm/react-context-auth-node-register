import { Request, Response } from "express";
import connection from "../database/connection";

/**
 *
 * @param request
 * @param response
 * @returns {Promise<this>}
 */
export const createSession = async (request: Request, response: Response) => {
  try {
    const { id } = request.body;
    const companys = await connection("companys")
      .where("id", id)
      .select("name")
      .first();

    if (!companys) {
      return response
        .status(400)
        .json({ error: "No Company found with this ID" });
    }

    return response.status(200).json(companys);
  } catch (error) {
    return response.status(500).json({ error: "Server Error" });
  }
};
