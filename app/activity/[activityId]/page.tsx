// import { fetchFilteredCustomers } from '@/app/lib/data';
// import CustomersTable from '@/app/ui/customers/table';
import { Metadata } from 'next';

interface Params {
    activityId: number;
}

interface Props {
    params: Params
}

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Page({ params }: Props) {
  const { activityId } = params;

  // const customers = await fetchFilteredCustomers(query);

  return (
    <main>
      {activityId}
    </main>
  );
}