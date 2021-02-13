import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("freelancers", function (table) {
    table.increments();

    table.string("title").notNullable();
    table.string("description").notNullable();
    table.decimal("value").notNullable();
    table.string("company_id").notNullable();
    table.foreign("company_id").references("id").inTable("companys");
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("freelancers");
}
