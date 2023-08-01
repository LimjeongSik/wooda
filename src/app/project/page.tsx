"use client";

import { useState } from "react";
import { ProjectTabContext } from "@/context/ProjectContext";
import { project } from "@/data/project";
import { ProjectDataProps } from "@/interface/Interface";
import FullHeightInner from "@/components/Layout/FullHeightInner";
import ProjectHdSection from "./ProjectHdSection";

export default function Project() {
    const [isData, setIsData] = useState<ProjectDataProps[]>(project);
    return (
        <ProjectTabContext.Provider value={{ isData, setIsData }}>
            <FullHeightInner>
                <ProjectHdSection />
            </FullHeightInner>
        </ProjectTabContext.Provider>
    );
}
