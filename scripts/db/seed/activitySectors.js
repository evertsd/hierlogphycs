const { root } = require('./diablo/sectors.js');
const { testBachelorParty } = require('./activities.js');

const activitySectorsToPlant = [
    {
        activity_id: testBachelorParty.id,
        sector_id: root.id
    }
];

async function seedActivitySectors(client) {
    try {
      const createTable = await createActivitySectorsTable(client);
      console.log(`Created "activity_sectors" table`);
  
      // Insert data into the "activities" table
      const activities = await Promise.all(insertActivitySectors(client, activitySectorsToPlant));
      console.log(`Seeded ${activities.length} activity_sectors`);
  
      return {
        createTable,
        activities,
      };
    } catch (error) {
      console.error('Error seeding activity_sectors:', error);
      throw error;
    }
  }


async function createActivitySectorsTable(client) {
    // Create the "activitySectors" table if it doesn't exist
    return await client.sql`
      CREATE TABLE IF NOT EXISTS activity_sectors (
        activity_id UUID NOT NULL,
        sector_id UUID NOT NULL,
        FOREIGN KEY (activity_id) REFERENCES activities(id),
        FOREIGN KEY (sector_id) REFERENCES sectors(id),
        UNIQUE(activity_id, sector_id)
      );
    `;
}

function insertActivitySectors(client, activitySectors) {
  console.log(`Seeding activity sectors ${activitySectors ? activitySectors.length : 'undefined'}`)
  return activitySectors.map((activitySector) => client.sql`
    insert into activity_sectors (activity_id, sector_id)
    values (${activitySector.activity_id}, ${activitySector.sector_id})
    on conflict (activity_id, sector_id) do nothing;
  `);
}

module.exports = { seedActivitySectors }