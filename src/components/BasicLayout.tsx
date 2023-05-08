"use client";

import { styled } from "styled-components";

interface BasicLayoutProps {
    children: React.ReactNode;
}

export default function BasicLayout({ children }: BasicLayoutProps) {
    return <Block>{children}</Block>;
}

const Block = styled.div`
    width: 100%;
    height: 100%;
    background-color: #000;
    color: #fff;
`;
