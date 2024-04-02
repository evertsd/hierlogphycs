const { db } = require('@vercel/postgres');
const { seedAchievements } = require('./achievements');
const { seedActivities } = require('./activities');
const { seedActivitySectors } = require('./activitySectors');
const { seedSectors } = require('./sectors');

async function main() {
  const client = await db.connect();

  await seedActivities(client);
  await seedSectors(client);
  await seedActivitySectors(client);
  await seedAchievements(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});