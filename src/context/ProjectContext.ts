import { ProjectContextProps } from "@/interface/Interface";
import { createContext } from "react";

export const ProjectContext = createContext<ProjectContextProps>(
    {} as ProjectContextProps,
);

export const ProjectTabContext = createContext<ProjectContextProps>(
    {} as ProjectContextProps,
);
