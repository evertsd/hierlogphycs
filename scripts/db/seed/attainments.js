
async function seedAttainments(client) {
  try {
    const createTable = await createAttainmentsTable(client);
    console.log(`Created "attainments" table`);

    return {
      createTable,
      attainments: [],
    };
  } catch (error) {
    console.error('Error seeding attainments:', error);
    throw error;
  }
}

async function createAttainmentsTable(client) {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "attainments" table if it doesn't exist
    return await client.sql`
      CREATE TABLE IF NOT EXISTS attainments (
        activity_id UUID NOT NULL,
        achievement_id UUID NOT NULL,
        attained_at TIMESTAMP NOT NULL DEFAULT NOW(),
        FOREIGN KEY (activity_id) REFERENCES activities(id),
        FOREIGN KEY (achievement_id) REFERENCES achievements(id),
        UNIQUE(activity_id, achievement_id, attained_at)
      );
    `;
}

module.exports = { seedAttainments }