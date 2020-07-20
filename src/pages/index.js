import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import MainSection from "../sections/MainSection";
import SectionSeparator from "../components/SectionSeparator";
import ExperienceSection from "../sections/ExperienceSection";
import EducationSection from "../sections/EducationSection";
import AbilitiesSection from "../sections/AbilitiesSection";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />
      <MainSection />
      <SectionSeparator />
      <ExperienceSection />
      <EducationSection />
      <AbilitiesSection />
    </Layout>
  );
}

export default IndexPage;
