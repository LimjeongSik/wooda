"use client";

import { styled } from "styled-components";
import MixTitle from "@/components/Titles/MixTitle";
import ScrollFadeInUp from "@/components/Animation/ScrollFadeInUp";

export default function MainTitle() {
    return (
        <TitleBlock>
            <ScrollFadeInUp>
                <MixTitle
                    title="UXUI DESIG"
                    mixTitle="NER"
                    subTitle="Design Insight."
                />
            </ScrollFadeInUp>
        </TitleBlock>
    );
}

const TitleBlock = styled.div`
    padding-left: 80rem;
    position: relative;
    margin-top: -33rem;
`;
