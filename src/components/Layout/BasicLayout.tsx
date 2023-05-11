"use client";

import { styled } from "styled-components";
import { ChildProps } from "@/interface/Interface";

export default function BasicLayout({ children }: ChildProps) {
    return <Block>{children}</Block>;
}

const Block = styled.div`
    width: 100%;
    height: 100%;
    background-color: #000;
    color: #fff;
`;
