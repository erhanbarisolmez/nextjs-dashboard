import { fetchCustomers, fetchInvoiceById } from '@/app/lib/data';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import EditForm from '@/app/ui/invoices/edit-form';
import { notFound } from 'next/navigation';

const Page = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers()
  ]);
  if (!invoice) {
    notFound();
  }
  return (

    <main>
      <Breadcrumbs breadcrumbs={[
        { label: 'Invoices', href: '/dashboard/invoices' },
        {
          label: 'Edit Invoice',
          href: `/dashboard/invoices/${id}/edit`,
          active: true,
        }
      ]}
      />
      <EditForm
        invoice={{
          id: `${invoice?.id}`,
          customer_id: `${invoice?.customer_id}`,
          amount: invoice!.amount,
          status: invoice!.status
        }}
        customers={customers} />
    </main>
  )
}

export default Page