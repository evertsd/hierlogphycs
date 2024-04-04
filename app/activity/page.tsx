// import { fetchFilteredCustomers } from '@/app/lib/data';
// import CustomersTable from '@/app/ui/customers/table';
import { Metadata } from 'next';
import { fetchActivity, fetchActivitySectors } from '../lib/data';
import { AchievementList } from '../ui/achievement/list';
import { Header } from '../ui/header';

export const metadata: Metadata = {
  title: 'Activity',
};

/* Hard code this for now so we don't have to implement the following features
 * activity index page (list activities and navigate to one) 
 *
 * activityId is used to determine what achievement attainments are pertinent */
const activityId = '13D07535-C59E-4157-A011-F8D2EF4E0CBB';


export default async function Page() {
  const activity = await fetchActivity(activityId);
  const sectors = await fetchActivitySectors(activityId);

  return (
    <main>
      <Header text={activity.name} thumbnail={activity.imageUrl} />
      <AchievementList activityId={activityId} sectors={sectors} achievements={[]} />
    </main>
  );
}