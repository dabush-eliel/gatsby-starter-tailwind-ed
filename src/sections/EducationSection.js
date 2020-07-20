import React from "react";
import SectionLayout from "../components/SectionLayout";
import ItemsList from "../components/ItemsList";
import { education } from "../data/education";

function EducationSection() {
  return (
    <SectionLayout
      id="education-section"
      title="education"
      quote="always be learning"
    >
      <ItemsList items={education} />
    </SectionLayout>
  );
}

export default EducationSection;
