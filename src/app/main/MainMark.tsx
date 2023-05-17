"use client";

import Image from "next/image";
import { Colors } from "@/styles/Colors";
import { styled } from "styled-components";

import Mark from "/public/images/icons/icon_mark.png";

export default function MainMark() {
    return (
        <MarkBlock>
            <Image src={Mark} alt="mark" />
            <div>
                I’M
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DESIGNS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SIMPLE
                <br />
                DETAILED&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AND
                <br />
                WITH&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;YOUR LIFE
                <br />
                UXUI DESIGNER&nbsp;&nbsp;&nbsp;&nbsp; INSIGHT
            </div>
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
    & > div {
        font-size: 20rem;
        color: ${Colors.black};
        font-weight: 500;
        line-height: 1.2;
    }
`;
