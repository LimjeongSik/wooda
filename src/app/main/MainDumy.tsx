"use client";

import Image from "next/image";
import { styled } from "styled-components";
import BlockTemplate from "@/components/Template/BlockTemplate";
import { Colors } from "@/styles/Colors";

import Dumy1 from "/public/images/bg/bg_dumy_1.png";
import Dumy2 from "/public/images/bg/bg_dumy_2.png";
import ScrollTransformLeft from "@/components/Animation/ScrollTransformLeft";
import ScrollTransformRight from "@/components/Animation/ScrollTransformRight";

export default function MainDumy() {
    return (
        <Block>
            <BlockTemplate
                styles={{
                    paddingTop: "790rem",
                    paddingBottom: "240rem",
                    paddingLeft: "80rem",
                    paddingRight: "80rem",
                }}
            >
                <ScrollTransformLeft>
                    <DumyContent>
                        <h1>I’m Hyunhwa</h1>
                        <DumyImageBox>
                            <Image
                                src={Dumy1}
                                width={230}
                                height={164}
                                alt="dumy"
                            />
                            <Image src={Dumy2} alt="dumy" />
                        </DumyImageBox>
                    </DumyContent>
                </ScrollTransformLeft>
                <ScrollTransformRight>
                    <DumyContent className="flex-end">
                        <h1>Woo Designer</h1>
                    </DumyContent>
                </ScrollTransformRight>
            </BlockTemplate>
        </Block>
    );
}

const Block = styled.div`
    overflow-x: hidden;
`;

const DumyContent = styled.div`
    display: flex;
    align-items: center;
    gap: 30rem;
    grid-gap: 30rem;
    h1 {
        font-size: 200rem;
        color: ${Colors.black};
        font-weight: 400;
    }

    &.flex-end {
        justify-content: flex-end;
    }
`;
const DumyImageBox = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
    grid-gap: 24px;

    img {
        width: 230rem;
        height: 164rem;
    }
`;
