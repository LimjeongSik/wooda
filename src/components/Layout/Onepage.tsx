"use client";

import MainMark from "@/app/main/MainMark";
import MainProfile from "@/app/main/MainProfile";
import MainTitle from "@/app/main/MainTitle";
import { styled } from "styled-components";

export default function Onepage() {
    return (
        <Block>
            <MainTitle />
            <MainMark />
            <MainProfilePosition>
                <MainProfile />
            </MainProfilePosition>
        </Block>
    );
}

const Block = styled.div`
    position: relative;
    width: 100%;
    height: calc(100vh - 105px);
`;

const MainProfilePosition = styled.div`
    position: absolute;
    bottom: -620rem;
    width: 100%;
`;
