const { diabloAchievements } = require('./diablo/achievements.js');

async function seedAchievements(client) {
  try {
    const createTable = await createAchievementsTable(client);
    console.log(`Created "achievements" table`);

    await client.sql`DELETE FROM achievements;`;

    // Insert data into the "achievements" table
    const achievements = await Promise.all(insertAchievements(client, diabloAchievements));
    console.log(`Seeded ${achievements.length} achievements`);

    return {
      createTable,
      achievements,
    };
  } catch (error) {
    console.error('Error seeding achievements:', error);
    throw error;
  }
}

async function createAchievementsTable(client) {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "achievements" table if it doesn't exist
    return await client.sql`
      CREATE TABLE IF NOT EXISTS achievements (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        image_url VARCHAR(255) NOT NULL,
        sector_id UUID NOT NULL,
        FOREIGN KEY (sector_id) REFERENCES sectors(id)
      );
    `;
}

function insertAchievements(client, achievements) {
  console.log(`Seeding achievements ${achievements ? achievements.length : 'undefined'}`)
  return achievements.map((achievement) => client.sql`
    insert into achievements (id, name, image_url, sector_id)
    values (${achievement.id}, ${achievement.name}, ${achievement.image_url}, ${achievement.sector_id})
    on conflict (id)
    do update set name = ${achievement.name}, image_url = ${achievement.image_url}, sector_id = ${achievement.sector_id};
  `);
}

module.exports = { seedAchievements }