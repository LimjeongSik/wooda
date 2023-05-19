"use client";

import BlockTemplate from "@/components/Template/BlockTemplate";
import { styled } from "styled-components";
import { Colors } from "@/styles/Colors";

import Mark from "/public/images/icons/icon_mark.png";
import Image from "next/image";

export default function AboutTitle() {
    return (
        <BlockTemplate styles={{ paddingRight: "80rem", paddingTop: "121rem" }}>
            <TitleBlock>
                Hello I<span>’</span>m Hyunhwa
                <br />
                Woo <br />
                UIUX Desig<span>ner</span>
                <Image src={Mark} width={57} height={54} alt="mark" />
            </TitleBlock>
        </BlockTemplate>
    );
}

const TitleBlock = styled.div`
    position: relative;
    font-size: 200rem;
    font-family: var(--fontspring);
    text-align: right;
    letter-spacing: -1rem;
    color: ${Colors.black};
    span {
        font-family: var(--pretendard);
        font-weight: 300;
    }
    img {
        position: absolute;
        left: 629rem;
        top: 194rem;
        width: 57rem;
        height: 54rem;
    }
`;
