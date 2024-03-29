import RevenueChart from "@/app/ui/dashboard/revenue-chart";
import { LatestInvoicesSkeleton, RevenueChartSkeleton } from "@/app/ui/skeletons";
import { Suspense } from "react";
import { fetchCardData } from "../../lib/data";
import CardWrapper from "../../ui/dashboard/cards";
import LatestInvoices from "../../ui/dashboard/latest-invoices";
import { lusitana } from "../../ui/fonts";

const Page = async () => {
  const { numberOfCustomers, numberOfInvoices, totalPaidInvoices, totalPendingInvoices } = await fetchCardData();

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-x1 md:text-2x1`}>Dashboard Page</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardWrapper />}>
          <CardWrapper />
        </Suspense>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
        <LatestInvoices />

        </Suspense>
      </div>
    </main>
  )
}

export default Page