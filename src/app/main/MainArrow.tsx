"use client";

import Image from "next/image";
import { styled } from "styled-components";

import Arrow from "/public/images/icons/icon_down_arrow.png";

export default function MainArrow() {
    return (
        <ArrowBlock>
            <Image src={Arrow} alt="더보기" />
        </ArrowBlock>
    );
}

const ArrowBlock = styled.div`
    text-align: center;
    padding: 114rem 0 320rem;
    img {
        width: 41rem;
        height: 46rem;
    }
`;
