"use client";

import Link from "next/link";
import BlockTemplate from "@/components/Template/BlockTemplate";
import { Colors } from "@/styles/Colors";
import { styled } from "styled-components";

export default function AboutEnd() {
    return (
        <BlockTemplate
            styles={{
                paddingLeft: "200rem",
                paddingRight: "200rem",
                paddingBottom: "180rem",
            }}
        >
            <Block>
                <TextForm>
                    <h1>Thank you</h1>
                    <h1>the Explore</h1>
                </TextForm>
                <Link href="/project">Project (→)</Link>
            </Block>
        </BlockTemplate>
    );
}

const Block = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    a {
        font-size: 26rem;
        color: ${Colors.black};
        font-weight: 400;
        text-decoration: none;
    }
`;
const TextForm = styled.div`
    width: 721rem;
    h1 {
        font-size: 88rem;
        letter-spacing: -0.85px;
        color: ${Colors.black};
        font-family: var(--fontspring);
    }

    & > h1:nth-child(2) {
        text-align: right;
    }
`;
