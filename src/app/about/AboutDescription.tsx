"use client";

import BlockTemplate from "@/components/Template/BlockTemplate";
import { Colors } from "@/styles/Colors";
import { styled } from "styled-components";

export default function AboutDescription() {
    return (
        <BlockTemplate
            styles={{
                paddingLeft: "480rem",
                paddingRight: "427rem",
                paddingTop: "258rem",
                paddingBottom: "276rem",
            }}
        >
            <DescriptionBlock>
                <strong>
                    for Design
                    <br />
                    with Design
                    <br />
                    from Design
                </strong>
                <span>
                    저는 UI/UX분석을 기반으로 사용자 중심의 디자인을 중요하게
                    생각합니다. 프로젝트에 기여하는 과정에서, 사용자가 더욱
                    편리하게 사용할 수 있는 방식을 고민하며 프로젝트를
                    디자인합니다.
                    <br />
                    <br />
                    또한, 디자인 시안 작성 및 개선을 통해 더욱 직관적이고 깔끔한
                    디자인을 제공할 수 있습니다. 사용자 인터페이스(UI) 및 사용자
                    경험(UX) 디자인을 개발하고 프로토타입을 제작하여, 사용자
                    피드백을 수집하며 더욱 완성도 높은 디자인을 만들어냅니다.
                    <br />
                    <br />
                    웹/앱디자인을 위해 포토샵, 일러스트레이터, 스케치, 제플린,
                    피그마를 사용할 수 있습니다. 또한, 반응형 디자인에 대한
                    이해와 프로토타입 제작 경험을 가지고 있습니다.
                    <br />
                    <br />
                    노션, 슬랙을 사용하여 프로젝트 관리 및 협업을
                    진행해왔습니다. 협업 과정에서, 팀원들과 소통하며 프로젝트를
                    성공적으로 마무리하는 것을 목표로 하고 있습니다.
                </span>
            </DescriptionBlock>
        </BlockTemplate>
    );
}

const DescriptionBlock = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 132rem;
    strong {
        font-size: 20rem;
        color: ${Colors.black};
        font-weight: 500;
        line-height: 1.2;
        white-space: nowrap;
    }
    span {
        font-size: 17rem;
        color: ${Colors.black};
        font-weight: 300;
        line-height: 1.6;
    }
`;
