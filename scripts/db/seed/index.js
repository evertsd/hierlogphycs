const { db } = require('@vercel/postgres');
const { seedAchievements } = require('./achievements');
const { seedActivities } = require('./activities');
const { seedActivitySectors } = require('./activitySectors');
const { seedSectors } = require('./sectors');
const { seedAttainments } = require('./attainments');

async function main() {
  const client = await db.connect();

  await seedActivities(client);
  await seedSectors(client);
  await seedActivitySectors(client);
  await seedAchievements(client);
  await seedAttainments(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});