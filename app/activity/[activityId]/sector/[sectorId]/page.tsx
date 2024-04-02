// import { fetchFilteredCustomers } from '@/app/lib/data';
// import CustomersTable from '@/app/ui/customers/table';
import { Metadata } from 'next';

interface Params {
    activityId: number;
    sectorId: number;
}

interface Props {
    params: Params
}

export const metadata: Metadata = {
  title: 'Customers',
};

/* Hard code this for now so we don't have to implement the following features
 * activity index page (list activities and navigate to one) 
 *
 * activityId is used to determine what achievement attainments are pertinent */
const activityId = '13D07535-C59E-4157-A011-F8D2EF4E0CBB';

export default async function Page({ params }: Props) {
  const { sectorId } = params;

  // const sectors = await fetchSubSectors(sectorId);
  // const achievements = await fetchAchievements({ activityId, sectorId });

  return (
    <main>
      <h1>Activity: {activityId}</h1>
      <p>Sector: {sectorId}</p>
    </main>
  );
}