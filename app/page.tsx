import Hero from '@/components/sections/hero';
import MarketStats from '@/components/sections/market-stats';
import Solutions from '@/components/sections/solutions';
import Investment from '@/components/sections/investment';
import Team from '@/components/sections/team';
import Financials from '@/components/sections/financials';
import Portal from '@/components/sections/portal';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <MarketStats />
      <Solutions />
      <Investment />
      <Team />
      <Financials />
      <Portal />
    </main>
  );
}