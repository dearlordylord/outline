"use strict";

module.exports = {
  async up(queryInterface) {
    await queryInterface.sequelize.query(
      `CREATE UNIQUE INDEX CONCURRENTLY IF NOT EXISTS "users_team_id_email_unique"
         ON "users" ("teamId", LOWER("email"))
         WHERE "deletedAt" IS NULL;`
    );
  },

  async down(queryInterface) {
    await queryInterface.sequelize.query(
      `DROP INDEX CONCURRENTLY IF EXISTS "users_team_id_email_unique";`
    );
  },
};
