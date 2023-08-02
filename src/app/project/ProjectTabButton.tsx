"use client";

import { useContext } from "react";
import { styled } from "styled-components";
import BlockTemplate from "@/components/Template/BlockTemplate";
import { Colors } from "@/styles/Colors";
import { ProjectTabContext } from "@/context/ProjectContext";

export default function ProjectTabButton() {
    const { isData, setIsData } = useContext(ProjectTabContext);

    return (
        <BlockTemplate
            styles={{
                paddingTop: "72rem",
            }}
        >
            <ButtonBlock>
                <TabButton>🖌All Design</TabButton>
                {isData
                    .map((data) => data.classification)
                    .filter(
                        (item, index) =>
                            isData
                                .map((item) => item.classification)
                                .indexOf(item) === index,
                    )
                    .map((value, index) => (
                        <TabButton key={index}>{value}</TabButton>
                    ))}
            </ButtonBlock>
        </BlockTemplate>
    );
}

const ButtonBlock = styled.div`
    display: flex;
    align-items: center;
    gap: 16rem;
    padding-bottom: 204rem;
    border-bottom: 1px solid ${Colors.borderLine};
`;
const TabButton = styled.button`
    padding: 14rem 22rem;
    border-radius: 29rem;
    border: 1px solid ${Colors.black};
    background-color: transparent;
    font-size: 20rem;
    letter-spacing: -0.2rem;
    line-height: 1;
    color: ${Colors.black};
`;
