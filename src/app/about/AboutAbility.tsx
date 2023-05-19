"use client";

import BlockTemplate from "@/components/Template/BlockTemplate";
import { styled } from "styled-components";

import AboutBg from "/public/images/bg/bg_about.png";
import Image from "next/image";
import { Colors } from "@/styles/Colors";

export default function AboutAbility() {
    return (
        <BlockTemplate
            styles={{ paddingLeft: "80rem", paddingBottom: "360rem" }}
        >
            <AbilityBlock>
                <Image
                    src={AboutBg}
                    width={826}
                    height={730}
                    alt="about ability"
                />
                <MyAbility>
                    <AbilityList>
                        <h3>UXUI,Graphic Designer</h3>
                        <p>
                            -UX/UI디자인, 프로덕트 디자이너 (총경력 5년)
                            <br />
                            - 기술, UX 분석을 바탕으로 기획하고 UI 디자이너로
                            프로젝트에 기여
                            <br />
                            <br />
                            1) Sketch, Zeplin, Pigma 등의 협업 툴 활용
                            <br />
                            2) 니즈를 파악하고 기획서 디자인컨셉 분석 가능
                            <br />
                            3) 앱/웹,반응형 서비스 대응능력
                        </p>
                    </AbilityList>
                    <AbilityList>
                        <h3>Education</h3>
                        <p>
                            계원예술대학교 시각디자인과
                            <br />
                            인포메이션 기반 UX/UI 디자인과
                            <br />
                            2013.02 - 2015.02
                        </p>
                    </AbilityList>
                    <AbilityList>
                        <h3>Design Skill</h3>
                        <p>
                            웹 디자인, Adobe Photoshop, Sketch,
                            <br />
                            UI 디자인, Adobe Illustrator, Zeplin,
                            <br />
                            그래픽 디자인, App 디자인, Pigma
                        </p>
                    </AbilityList>
                </MyAbility>
            </AbilityBlock>
        </BlockTemplate>
    );
}

const AbilityBlock = styled.div`
    display: flex;
    align-items: center;
    gap: 140rem;
    img {
        width: 826rem;
        height: 730rem;
    }
`;
const MyAbility = styled.div`
    display: flex;
    flex-direction: column;
    gap: 80rem;
`;
const AbilityList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20rem;

    h3 {
        font-size: 20rem;
        color: ${Colors.black};
        font-weight: 600;
    }
    p {
        font-size: 17rem;
        color: ${Colors.black};
        font-weight: 300;
        line-height: 1.5;
    }
`;
