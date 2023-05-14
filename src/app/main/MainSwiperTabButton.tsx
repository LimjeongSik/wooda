"use Client";

import { SetStateAction, useContext, useState } from "react";
import { ProjectContext } from "@/context/ProjectContext";

import { Colors } from "@/styles/Colors";
import { css, styled } from "styled-components";
import { project } from "@/data/project";

interface Props {
    name: string;
    filter: string;
}

export default function MainSwiperTabButton({
    name,
    filter,
}: Props) {
    const { setIsData } = useContext(ProjectContext);

    const onClick = () => {
        if (name === "All") {
            setIsData(project);
        } else {
            setIsData(
                project.filter((data) => {
                    return data.classification === filter;
                }),
            );
        }
    };

    return (
        <>
            <TabButton onClick={onClick}>{name}</TabButton>
        </>
    );
}

const TabButton = styled.button`
    background: none;
    border: none;
    font-size: 38rem;
    letter-spacing: -0.38rem;
    color: ${Colors.gray};
    font-family: var(--fontspring);

    &.active {
        color: ${Colors.black};
        text-decoration: underline;
    }
`;
