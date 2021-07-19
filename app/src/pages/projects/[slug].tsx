import { NextPage } from "next";
import React from "react";
import { DashboardTemplate } from "../../components/templates/DashboardTemplate";

const ProjectDetailPage: NextPage = () => {
  return (
    <DashboardTemplate title="project detail page">
      <div>vd</div>
    </DashboardTemplate>
  );
};

export default ProjectDetailPage;

export function getStaticPaths() {
  // Return a list of possible value for id
  const paths = [
    { params: { slug: "a" } },
    { params: { slug: "b" } },
    { params: { slug: "c" } },
  ];
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const data = {}
  return {
    props: {
      data,
    },
  };
}
