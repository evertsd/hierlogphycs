const { diabloSectors } = require('./diablo/sectors.js');

async function seedSectors(client) {
  try {
    const createTable = await createSectorsTable(client);
    console.log(`Created "sectors" table`);

    await client.sql`DELETE FROM sectors;`;

    // Insert data into the "sectors" table
    const sectors = await Promise.all(insertSectors(client, diabloSectors));
    console.log(`Seeded ${sectors.length} sectors`);

    return {
      createTable,
      sectors,
    };
  } catch (error) {
    console.error('Error seeding sectors:', error);
    throw error;
  }
}

async function createSectorsTable(client) {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "sectors" table if it doesn't exist
    return await client.sql`
      CREATE TABLE IF NOT EXISTS sectors (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        image_url VARCHAR(255) NOT NULL,
        parent_sector_id UUID,
        FOREIGN KEY (parent_sector_id) REFERENCES sectors(id) ON DELETE SET NULL
      );
    `;
}

function insertSectors(client, sectors) {
  console.log(`Seeding sectors ${sectors ? sectors.length : 'undefined'}`)
  return sectors.map((sector) => client.sql`
    insert into sectors (id, name, image_url, parent_sector_id)
    values (${sector.id}, ${sector.name}, ${sector.image_url}, ${sector.parent_sector_id})
    on conflict (id)
    do update set name = ${sector.name}, image_url = ${sector.image_url}, parent_sector_id = ${sector.parent_sector_id};
  `);
}

module.exports = { seedSectors }