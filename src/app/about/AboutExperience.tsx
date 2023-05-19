"use client";

import BlockTemplate from "@/components/Template/BlockTemplate";
import { Colors } from "@/styles/Colors";
import { styled } from "styled-components";

import { experience } from "@/data/experience";
import { ExperienceDataProps } from "@/interface/Interface";

export default function AboutExperience() {
    return (
        <BlockTemplate styles={{ paddingBottom: "320rem" }}>
            {experience.map((data: ExperienceDataProps) => (
                <ExperienceBlock key={data.id}>
                    <div className="date">{data.date}</div>
                    <div className="company">{data.company}</div>
                    <div className="position">{data.position}</div>
                    <Explain>
                        {data.explain.map((explain: string, index: number) => (
                            <div className="explain" key={index}>
                                {explain}
                            </div>
                        ))}
                    </Explain>
                </ExperienceBlock>
            ))}
        </BlockTemplate>
    );
}

const ExperienceBlock = styled.div`
    display: grid;
    grid-template-columns: 0.5fr 0.8fr 1fr 1fr;
    grid-column-gap: 10rem;
    align-items: center;
    min-height: 103rem;
    padding-left: 80rem;
    padding-top: 23rem;
    padding-bottom: 23rem;
    border-top: 1px solid ${Colors.black};
    border-bottom: 1px solid ${Colors.black};
    margin-top: -1px;
    font-size: 20rem;
    color: ${Colors.black};
    word-break: keep-all;
    line-height: 1.5;

    .date {
        font-weight: 400;
    }
    .company {
        font-weight: 500;
    }
    .position {
        font-weight: 400;
    }
    .explain {
        font-weight: 400;
    }
`;
const Explain = styled.div`
    display: flex;
    flex-direction: column;
`;
