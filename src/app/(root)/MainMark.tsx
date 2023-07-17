"use client";

import Image from "next/image";
import { styled } from "styled-components";

import Mark from "/public/images/icons/icon_mark.png";
import Lorem from "@/components/Lorem";

export default function MainMark() {
    return (
        <MarkBlock>
            <Image src={Mark} alt="mark" />
            <Lorem />
        </MarkBlock>
    );
}

const MarkBlock = styled.div`
    position: relative;
    z-index: 100;
    padding-left: 80rem;
    margin-top: 204rem;
    & > img {
        width: 72rem;
        height: 68rem;
        margin-bottom: 72rem;
    }
`;
