"use client";

import { css, styled } from "styled-components";
import ScrollDownTxt from "/public/images/txt/txt_scrolldown.png";
import ScrollDown from "/public/images/btns/btn_scrolldown.png";
import Image from "next/image";

interface Props {
    scrollDownEvent?: () => void;
    styles?: {
        position?: string;
        bottom?: string;
        left?: string;
        right?: string;
        top?: string;
    };
}

export default function ScrollDownButton({ scrollDownEvent, styles }: Props) {
    return (
        <Block $st={{ styles }}>
            <ButtonBlock>
                <Image
                    src={ScrollDownTxt}
                    width={200}
                    height={195}
                    alt="scroll-down"
                    className="img_scroll"
                />
                <Image
                    src={ScrollDown}
                    width={34}
                    height={30}
                    alt="scroll-down"
                    className="btn_scroll"
                    onClick={scrollDownEvent}
                />
            </ButtonBlock>
        </Block>
    );
}

const Block = styled.div<{ $st: Props }>`
    position: ${(props) => props.$st.styles?.position};
    bottom: ${(props) => props.$st.styles?.bottom};
    left: ${(props) => props.$st.styles?.left};
    right: ${(props) => props.$st.styles?.right};
    top: ${(props) => props.$st.styles?.top};
`;
const ButtonBlock = styled.div`
    position: relative;
    width: fit-content;

    .img_scroll {
        display: block;
        width: 200rem;
        height: 195rem;
        animation: infinityRotate 60s linear infinite;
    }
    .btn_scroll {
        display: block;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 34rem;
        height: 30rem;
        cursor: pointer;
        z-index: 100;
    }

    @keyframes infinityRotate {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;
