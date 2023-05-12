"use client";

import { styled } from "styled-components";
import { Colors } from "@/styles/Colors";

export default function Main() {
    return (
        <Block>
            <MainTitleBlock>
                <h1 className="fontspring">UXUI DESIGNER</h1>
                <span>Design Insight.</span>
            </MainTitleBlock>
        </Block>
    );
}

const Block = styled.div``;
const MainTitleBlock = styled.div`
    position: relative;
    margin-left: 80rem;

    h1 {
        font-size: 230rem;
        color: ${Colors.black};
    }
`;
