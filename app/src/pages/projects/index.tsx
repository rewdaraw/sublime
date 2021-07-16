import { NextPage } from "next";
import React from "react";
import { DashboardTemplate } from "../../components/templates/DashboardTemplate";

export const ProjectLists: NextPage = () => {
  return (
    <DashboardTemplate title="project list page">
      <div>Index.tsx in Main</div>
    </DashboardTemplate>
  );
};

export default ProjectLists;
