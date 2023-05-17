"use client";

import { styled } from "styled-components";
import MixTitle from "@/components/Titles/MixTitle";

export default function MainTitle() {
    return (
        <TitleBlock>
            <MixTitle
                title="UXUI DESIG"
                mixTitle="NER"
                subTitle="Design Insight."
            />
        </TitleBlock>
    );
}

const TitleBlock = styled.div`
    padding-left: 80rem;
    position: relative;
    margin-top: -33rem;
`;
