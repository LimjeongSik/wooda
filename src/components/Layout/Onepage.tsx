"use client";

import MainMark from "@/app/(root)/MainMark";
import MainProfile from "@/app/(root)/MainProfile";
import MainTitle from "@/app/(root)/MainTitle";
import { styled } from "styled-components";
import ScrollDownButton from "../Button/ScrollDownButton";
import useMoveScroll from "@/hooks/useMoveScroll";

export default function Onepage() {
    const { elementRef, onMoveScroll } = useMoveScroll();
    return (
        <Block>
            <MainTitle />
            <ScrollDownButton
                styles={{ position: "absolute", top: "294rem", right: "80rem" }}
                scrollDownEvent={onMoveScroll}
            />
            <MainMark />
            <MainProfilePosition ref={elementRef}>
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
    bottom: -680rem;
    width: 100%;
    padding-top: 30rem;
`;
