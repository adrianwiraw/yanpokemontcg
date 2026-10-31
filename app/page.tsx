import dynamicImport from "next/dynamic";
import { Suspense } from "react";
import { CardHeader } from "./_components/HeroSection/CardHeader";
import MarketHeader from "./_components/Marketplace/MarketHeader";
import HeroSection from "./_components/HeroSection";
import { CardHeaderSkeleton, CardSkeleton } from "./_components/CardSkeleton";
import { SourceSectionSkeleton } from "./_components/SourceSectionClient";

export const dynamic = "force-dynamic";

const SourceSectionClient = dynamicImport(
  () => import("./_components/SourceSectionClient"),
  {
    ssr: true,
    loading: () => <SourceSectionSkeleton />,
  },
);

const PokemonGridWrapper = dynamicImport(
  () => import("./_components/HeroSection/PokemonGridWrapper"),
  {
    ssr: true,
    loading: () => <CardSkeleton />,
  },
);

const MarketPlace = dynamicImport(() => import("./_components/Marketplace"), {
  ssr: true,
});

const ShowCaseWrapper = dynamicImport(
  () => import("./_components/Marketplace/ShowcaseWrapper"),
  {
    ssr: true,
    loading: () => <CardSkeleton />,
  },
);

export default function Home() {
  return (
    <div className="min-h-full w-full bg-yellow-300 flex flex-col items-center justify-center text-gray-800">
      <HeroSection>
        <CardHeader />
        <Suspense fallback={<CardHeaderSkeleton />}>
          <PokemonGridWrapper />
        </Suspense>
      </HeroSection>

      <MarketPlace>
        <MarketHeader />
        <Suspense fallback={<CardSkeleton />}>
          <ShowCaseWrapper />
        </Suspense>
      </MarketPlace>

      <SourceSectionClient />
    </div>
  );
}
