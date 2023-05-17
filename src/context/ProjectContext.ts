import { ProjectContextProps } from "@/interface/Interface";
import { createContext } from "react";

export const ProjectContext = createContext<ProjectContextProps>(
    {} as ProjectContextProps,
);
