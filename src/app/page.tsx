import HeroClean from '@/sections/HeroClean';
import QuickStarts from '@/sections/QuickStarts';
import MissionSection from '@/sections/MissionSection';
import AcademicCalendarSection from '@/sections/AcademicCalendarSection';
import FutureFocusSection from '@/sections/FutureFocusSection';
import StatisticsSection from '@/sections/StatisticsSection';
import AccreditationSection from '@/sections/AccreditationSection';
import LatestNewsSection from '@/sections/LatestNewsSection';
import Footer from '@/sections/Footer';
import MapSection from '@/sections/MapSection';
import FadeInWhenVisible from '@/components/FadeInWhenVisible';
import RootProvider from '@/components/RootProvider';

export default function Home() {
  return (
    <RootProvider>
      <main>
        <HeroClean />
        <FadeInWhenVisible><QuickStarts /></FadeInWhenVisible>
        <FadeInWhenVisible><MissionSection /></FadeInWhenVisible>
        <FadeInWhenVisible><AcademicCalendarSection /></FadeInWhenVisible>
        <FadeInWhenVisible><FutureFocusSection /></FadeInWhenVisible>
        <FadeInWhenVisible><StatisticsSection /></FadeInWhenVisible>
        <FadeInWhenVisible><LatestNewsSection /></FadeInWhenVisible>
        <FadeInWhenVisible><AccreditationSection /></FadeInWhenVisible>
        <FadeInWhenVisible><MapSection /></FadeInWhenVisible>
        <Footer />
      </main>
    </RootProvider>
  );
}