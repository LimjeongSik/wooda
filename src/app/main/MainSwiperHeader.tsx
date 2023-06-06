"use client";

import Link from "next/link";
import { styled } from "styled-components";
import BlockTemplate from "@/components/Template/BlockTemplate";
import { Colors } from "@/styles/Colors";
import { useContext } from "react";
import { ProjectContext } from "@/context/ProjectContext";

export default function MainSwiperHeader() {
    const { isData } = useContext(ProjectContext);
    return (
        <BlockTemplate
            styles={{ paddingLeft: "220rem", paddingRight: "80rem" }}
        >
            <Block>
                <SwiperTitle>
                    <h1>RECENT PROJECTS</h1>
                    <span>{isData.length}</span>
                </SwiperTitle>
                <Link href="/project">Vewe All (→)</Link>
            </Block>
        </BlockTemplate>
    );
}
const Block = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30rem;

    a {
        font-size: 26rem;
        color: ${Colors.black};
        letter-spacing: -0.26rem;
        font-weight: 400;
        text-decoration: none;
    }
`;
const SwiperTitle = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 6rem;

    h1 {
        font-size: 48rem;
        letter-spacing: -0.48rem;
        color: ${Colors.black};
        font-weight: 300;
    }
    span {
        font-size: 20rem;
        color: ${Colors.black};
        font-family: var(--fontspring);
        margin-top: 4rem;
    }
`;
