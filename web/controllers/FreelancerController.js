import connection from "../database/connection";

/**
 *
 * @param request
 * @param response
 * @returns {Promise<this>}
 */
export const getFreelancer = async (request, response) => {
  try {
    const { page = 1 } = request.query;
    const [count] = await connection("freelancers").count();
    const freelancers = await connection("freelancers")
      .join("companys", "companys.id", "=", "freelancers.company_id")
      .limit(5)
      .offset((page - 1) * 5)
      .select([
        "freelancers.*",
        "companys.name",
        "companys.email",
        "companys.whatsapp",
        "companys.city",
        "companys.uf",
      ]);

    response.header("X-Total-Count", count["count(*)"]);
    return response.status(200).json(freelancers);
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
export const registerFreelancer = async (request, response) => {
  try {
    const { title, description, value } = request.body;
    const company_id = request.headers.authorization;
    const [id] = await connection("freelancers").insert({
      title,
      description,
      value,
      company_id,
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
export const deleteFreelancer = async (request, response) => {
  try {
    const { id } = request.params;
    const company_id = request.headers.authorization;
    const freelancers = await connection("freelancers")
      .where("id", id)
      .select("company_id")
      .first();

    if (freelancers.company_id !== company_id) {
      return response.status(401).json({ error: "Operation not permitted" });
    }

    await connection("freelancers").where("id", id).delete();

    return response.status(204).send();
  } catch (error) {
    return response.status(500).json({ error: "Server Error" });
  }
};
