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

export default async function Page({ params }: Props) {
  const { activityId, sectorId } = params;

  // const customers = await fetchFilteredCustomers(query);

  return (
    <main>
      <h1>Activity: {activityId}</h1>
      <p>Sector: {sectorId}</p>
    </main>
  );
}