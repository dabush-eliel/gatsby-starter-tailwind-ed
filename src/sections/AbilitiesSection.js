import React from "react";
import SectionLayout from "../components/SectionLayout";
import RatingList from "../components/RatingList";
import { skills } from "../data/skills";

function AbilitiesSection() {
  return (
    <SectionLayout
      id="abilities-section"
      title="abilities"
      quote="ready for anything"
    >
      <RatingList items={skills} title="Skills" />
    </SectionLayout>
  );
}

export default AbilitiesSection;
