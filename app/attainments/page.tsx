// import { fetchFilteredCustomers } from '@/app/lib/data';
// import CustomersTable from '@/app/ui/customers/table';
import { Metadata } from 'next';
import { fetchActivity, fetchActivitySectors } from '../lib/data';
import { Header } from '../ui/header';
import { fetchAttainments } from '@/app/lib/data/attainment';
import { AttainmentsList } from '@/app/ui/attainments';

export const metadata: Metadata = {
  title: 'Attainments',
};

/* Hard code this for now so we don't have to implement the following features
 * activity index page (list activities and navigate to one) 
 *
 * activityId is used to determine what achievement attainments are pertinent */
const activityId = '13D07535-C59E-4157-A011-F8D2EF4E0CBB';


export default async function Page() {
    const activity = await fetchActivity(activityId);
    const attainments = await fetchAttainments({
        activityId,
        skip: 0,
        take: 16
    });

  return (
    <main>
      <Header text={activity.name} thumbnail={activity.imageUrl} />
      <AttainmentsList attainments={attainments} />
    </main>
  );
}