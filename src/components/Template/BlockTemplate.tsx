"use client";

import { styled } from "styled-components";
import { Colors } from "@/styles/Colors";
import { type BlockTemplateProps } from "@/interface/Interface";

interface StylesProps {
    styles?: {
        paddingLeft?: string;
        paddingRight?: string;
        paddingTop?: string;
        paddingBottom?: string;
    };
}

export default function BlockTemplate({
    children,
    ...styles
}: BlockTemplateProps) {
    return <Block st={styles}>{children}</Block>;
}

const Block = styled.div<{ st: StylesProps }>`
    width: 100%;
    background-color: ${Colors.white};
    padding-left: ${(props) => props.st.styles?.paddingLeft};
    padding-right: ${(props) => props.st.styles?.paddingRight};
    padding-top: ${(props) => props.st.styles?.paddingTop};
    padding-bottom: ${(props) => props.st.styles?.paddingBottom};
`;
