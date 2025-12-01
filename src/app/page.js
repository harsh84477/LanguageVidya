
// "use client";

import EnglishCourseBenefits from "@/components/Layers/EnglishCourseBenefits";
import HeroSection from "@/components/Layers/HeroSection";
import WhoCanLearn from "@/components/Layers/WhoCanLearn";
import OnlineCourses from "@/components/Layers/OnlineCourses";
import LookingFor from "@/components/Layers/LookingFor"; 
import TeachersSection from "@/components/Layers/TeachersSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <WhoCanLearn />
      <EnglishCourseBenefits />
      <OnlineCourses/>
      <LookingFor/>
      <TeachersSection/>
      
    </div>


  );
}
