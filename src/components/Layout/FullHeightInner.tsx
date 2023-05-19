"use client";

import { styled } from "styled-components";
import { ChildProps } from "@/interface/Interface";

export default function FullHeightInner({ children }: ChildProps) {
    return <FullHeightInnerBox>{children}</FullHeightInnerBox>;
}

const FullHeightInnerBox = styled.div`
    flex: 1;
`;
