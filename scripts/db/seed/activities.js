const { imageOfLOD } = require('./diablo/images.js');

const testBachelorParty = {
        id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
        name: 'Test Bachelor Party',
        image_url: imageOfLOD
};

const activitiesToPlant = [testBachelorParty];

async function seedActivities(client) {
  try {
    const createTable = await createActivitiesTable(client);
    console.log(`Created "activities" table`);

    // Insert data into the "activities" table
    const activities = await Promise.all(insertActivities(client, activitiesToPlant));
    console.log(`Seeded ${activities.length} activities`);

    return {
      createTable,
      activities,
    };
  } catch (error) {
    console.error('Error seeding activities:', error);
    throw error;
  }
}

async function createActivitiesTable(client) {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "activities" table if it doesn't exist
    return await client.sql`
      CREATE TABLE IF NOT EXISTS activities (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        image_url VARCHAR(255) NOT NULL
      );
    `;
}

function insertActivities(client, activities) {
  console.log(`Seeding activities ${activities ? activities.length : 'undefined'}`)
  return activities.map((activity) => client.sql`
    insert into activities (id, name, image_url)
    values (${activity.id}, ${activity.name}, ${activity.image_url})
    on conflict (id)
    do update set name = ${activity.name}, image_url = ${activity.image_url};
  `);
}

module.exports = { seedActivities, testBachelorParty }