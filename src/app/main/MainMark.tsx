"use client";

import Image from "next/image";
import { Colors } from "@/styles/Colors";
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
    padding-left: 80rem;
    margin-top: 204rem;
    & > img {
        width: 66rem;
        height: 62rem;
        margin-bottom: 90rem;
    }
`;
