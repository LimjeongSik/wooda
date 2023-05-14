import { StaticImageData } from "next/image";

export interface ChildProps {
    children: React.ReactNode;
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
