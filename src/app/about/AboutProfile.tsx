"use client";

import Image from "next/image";
import BlockTemplate from "@/components/Template/BlockTemplate";
import { Colors } from "@/styles/Colors";
import { styled } from "styled-components";

import Profile from "/public/images/bg/bg_profile2.png";

export default function AboutProfile() {
    return (
        <BlockTemplate
            styles={{
                paddingLeft: "124rem",
                paddingRight: "124rem",
                paddingTop: "35rem",
            }}
        >
            <AboutProfileTitles>
                <span>Hello I</span>’m Hyunhwa Woo <span>Desig</span>ner
            </AboutProfileTitles>
            <AboutProfileContent>
                <Image src={Profile} alt="profile" width={628} height={838} />
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
            </AboutProfileContent>
        </BlockTemplate>
    );
}

const AboutProfileTitles = styled.h1`
    position: relative;
    font-size: 200rem;
    letter-spacing: -1px;
    color: ${Colors.baseWhite};
    font-weight: 400;
    text-align: center;
    line-height: 1;
    span {
        font-family: var(--fontspring);
    }
    z-index: 100;
    mix-blend-mode: difference;
`;
const AboutProfileContent = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    gap: 94rem;
    padding-left: 174rem;
    margin-top: -73rem;
    img {
        width: 623rem;
        height: 838rem;
    }
`;
const MyAbility = styled.div`
    display: flex;
    flex-direction: column;
    gap: 82rem;
    margin-top: 310rem;
`;
const AbilityList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18rem;
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
