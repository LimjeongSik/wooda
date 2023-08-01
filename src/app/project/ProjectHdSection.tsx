"use client";

import { useContext } from "react";
import { styled } from "styled-components";
import BlockTemplate from "@/components/Template/BlockTemplate";
import { Colors } from "@/styles/Colors";
import ProjectTabButton from "./ProjectTabButton";
import { ProjectTabContext } from "@/context/ProjectContext";

export default function ProjectHdSection() {
    const { isData } = useContext(ProjectTabContext);
    return (
        <BlockTemplate
            styles={{
                paddingLeft: "80rem",
                paddingRight: "80rem",
                paddingTop: "35rem",
                paddingBottom: "204rem",
            }}
        >
            <TitleBlock>
                <h1>PROJECTS</h1>
                <span>{isData.length}</span>
            </TitleBlock>
            <ProjectTabButton />
        </BlockTemplate>
    );
}
const TitleBlock = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 10rem;

    h1 {
        font-size: 230rem;
        color: ${Colors.black};
        font-family: var(--fontspring);
    }
    span {
        font-size: 36rem;
        letter-spacing: -0.35rem;
        color: ${Colors.black};
        font-family: var(--fontspring);
        margin-top: 35rem;
    }
`;
