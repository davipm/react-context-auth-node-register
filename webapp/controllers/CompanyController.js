import crypto from "crypto";
import connection from "../database/connection";

/**
 *
 * @param request
 * @param response
 * @returns {Promise<this>}
 */
export const getCompanys = async (request, response) => {
  try {
    const companys = await connection('companys').select('*');
    return response.status(200).json(companys);
  } catch (error) {
    return response.status(500).json({ error: "Server Error" });
  }
};

/**
 *
 * @param request
 * @param response
 * @returns {Promise<this>}
 */
export const createCompany = async (request, response) => {
  try {
    const { email, name, whatsapp, city, uf } = request.body;
    const id = crypto.randomBytes(4).toString("HEX");

    await connection("companys").insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    });

    return response.status(201).json({ id });
  } catch (error) {
    return response.status(500).json({ error: "Server Error" });
  }
};

/**
 *
 * @param request
 * @param response
 * @returns {Promise<this>}
 */
export const deleteCompany = async (request, response) => {
  try {
    const { id } = request.params;
    await connection("companys").where("id", id).delete();

    return response.status(204).send();
  } catch (error) {
    return response.status(500).json({ error: "Server Error" });
  }
};
