"use client";

import { styled } from "styled-components";
import { useContext, useState } from "react";
import { Colors } from "@/styles/Colors";
import { ProjectContext } from "@/context/ProjectContext";
import { project } from "@/data/project";

const TabButtonName = [
    {
        id: 0,
        name: "All",
        filter: "All",
    },
    {
        id: 1,
        name: "Web design",
        filter: "Web/Mobile Design",
    },
    {
        id: 2,
        name: "Mobile APP",
        filter: "Web/Mobile Design",
    },
    {
        id: 3,
        name: "Graphic design",
        filter: "Graphic Design",
    },
];

export default function MainSwiperTab() {
    const { setIsData } = useContext(ProjectContext);
    const [isActive, setIsActive] = useState(0);
    const onClick = (id: number, name: string, filter: string) => {
        setIsActive(id);
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
        <Block>
            {TabButtonName.map((button, idx) => (
                <TabButton
                    key={button.id}
                    onClick={() =>
                        onClick(button.id, button.name, button.filter)
                    }
                    className={isActive === idx ? "active" : ""}
                >
                    {button.name}
                </TabButton>
            ))}
        </Block>
    );
}

const Block = styled.div`
    display: flex;
    align-items: center;
    gap: 36rem;
    padding-bottom: 36rem;
    padding-left: 220rem;
`;

const TabButton = styled.button`
    background: none;
    border: none;
    font-size: 38rem;
    letter-spacing: -0.38rem;
    color: ${Colors.gray};
    font-family: var(--fontspring);
    cursor: none;

    &.active {
        color: ${Colors.black};
        text-decoration: underline;
    }
`;
