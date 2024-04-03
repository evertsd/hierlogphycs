// import { fetchFilteredCustomers } from '@/app/lib/data';
// import CustomersTable from '@/app/ui/customers/table';
import { Metadata } from 'next';
import { fetchAchievements, fetchSector, fetchSectorChildren } from '@/app/lib/data';
import { AchievementList } from '@/app/ui/achievement/list';
import { Header } from '@/app/ui/header';

interface Params {
  activityId: string;
  sectorId: string;
}

interface Props {
  params: Params
}

export const metadata: Metadata = {
  title: 'Sector',
};

/* Hard code this for now so we don't have to implement the following features
 * activity index page (list activities and navigate to one) 
 *
 * activityId is used to determine what achievement attainments are pertinent */
const activityId = '13D07535-C59E-4157-A011-F8D2EF4E0CBB';


export default async function Page({ params }: Props) {
  const sector = await fetchSector(params.sectorId);
  const achievements = await fetchAchievements(params.sectorId);
  const sectors = await fetchSectorChildren(params.sectorId);
  const returnLink = sector.parentSectorId
    ? `/sector/${sector.parentSectorId}`
    : '/activity';

  return (
    <main>
      <Header text={sector.name} thumbnail={sector.imageUrl} returnLink={returnLink} />
      <AchievementList activityId={activityId} sectors={sectors} achievements={achievements} />
    </main>
  );
}