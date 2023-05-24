"use client";

import { Colors } from "@/styles/Colors";
import { styled } from "styled-components";

export default function Lorem() {
    return (
        <LoremBlock>
            I’M
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DESIGNS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SIMPLE
            <br />
            DETAILED&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AND
            <br />
            WITH&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;YOUR LIFE
            <br />
            UXUI DESIGNER&nbsp;&nbsp;&nbsp;&nbsp; INSIGHT
        </LoremBlock>
    );
}

const LoremBlock = styled.div`
    font-size: 20rem;
    color: ${Colors.black};
    font-weight: 500;
    line-height: 1.2;
`;
