import { StaticQuery, graphql } from "gatsby";
import React from "react";
import SectionLayout from "../components/SectionLayout";
import ItemsList from "../components/ItemsList";
import { jobs } from "../data/jobs";
import { projects } from "../data/projects";

function JobsList() {
  return (
    <StaticQuery
      query={graphql`
        query JobsImages {
          allFile(
            filter: {
              relativePath: {
                in: [
                  "jobs/joltlogo.png"
                  "jobs/nicelogo.png"
                  "jobs/ladbrokeslogo.png"
                ]
              }
            }
          ) {
            nodes {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      `}
      render={(data) => <ItemsList data={data} items={jobs} title="Jobs" />}
    />
  );
}

function ProjectsList() {
  return <ItemsList items={projects} title="Projects" />;
}

function ExperienceSection() {
  return (
    <SectionLayout
      id="experience-section"
      title="experience"
      quote="get things done"
    >
      <JobsList />
      <ProjectsList />
    </SectionLayout>
  );
}

export default ExperienceSection;
