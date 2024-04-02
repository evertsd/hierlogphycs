const { db } = require('@vercel/postgres');
const { seedAchievements } = require('./achievement');
const { seedSectors } = require('./sector');

async function main() {
  const client = await db.connect();

  await seedSectors(client);
  await seedAchievements(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});