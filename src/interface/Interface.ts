import { StaticImageData } from "next/image";

export interface ChildProps {
    children: React.ReactNode;
}

export interface BlockTemplateProps {
    children: ChildProps | React.ReactNode[];
    styles?: {
        paddingLeft?: string;
        paddingRight?: string;
        paddingTop?: string;
        paddingBottom?: string;
    };
}

export interface MixTitleProps {
    title: string;
    mixTitle: string;
    subTitle?: string | undefined;
    classname?: string | undefined;
}

export interface MouseMoveEventProsp {
    x: number;
    y: number;
}

export interface ProjectDataProps {
    id: number;
    name: string;
    classification: string;
    image: StaticImageData;
}

export interface ProjectContextProps {
    isData: ProjectDataProps[];
    setIsData: React.Dispatch<React.SetStateAction<ProjectDataProps[]>>;
}

export interface ExperienceDataProps {
    id: number;
    date: string;
    company: string;
    position: string;
    explain: string[];
}

export interface MenuProps {
    id: number;
    href: string;
    title: string;
}
