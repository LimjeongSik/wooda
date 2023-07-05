"use client";

import Image from "next/image";
import Link from "next/link";

import BlockTemplate from "@/components/Template/BlockTemplate";
import MixTitle from "@/components/Titles/MixTitle";

import { Colors } from "@/styles/Colors";
import { styled } from "styled-components";

import Profile from "/public/images/bg/bg_profile.png";

export default function MainProfile() {
    return (
        <BlockTemplate styles={{ paddingLeft: "80rem", paddingRight: "80rem" }}>
            <ProfileBlock>
                <MixTitle
                    title="PORTFOL"
                    mixTitle="IO"
                    classname="absolute-block"
                />
                <Image src={Profile} alt="profile" />
                <ProfileContent>
                    <div className="left-column">
                        <strong>for Design</strong>
                        <strong>with Design</strong>
                        <strong>from Design</strong>
                    </div>
                    <div className="right-column">
                        <h2>UXUI,Graphic Designer</h2>
                        <span>
                            저는 창의성과 디자인 열정을 가지고 있으며, 사용자
                            중심의 웹 디자인을 통해 사용자들에게 최상의 경험을
                            제공하기를 원합니다.
                            <br />
                            시각적인 요소와 사용자 인터페이스를 조화롭게
                            결합하여 직관적이고
                            <br /> 사용하기 쉬운 디자인을 만들기 위해 노력하고
                            있으며, 끊임없이 발전하고
                            <br /> 성장하는 디자이너로서 저의 역량을 바탕으로 웹
                            디자인 프로젝트에 기여하고,
                            <br /> 사용자들에게 즐거운 웹 경험을 제공하도록
                            합니다.
                        </span>
                        <Link href="/about">About me</Link>
                    </div>
                </ProfileContent>
            </ProfileBlock>
        </BlockTemplate>
    );
}

const ProfileBlock = styled.div`
    padding-left: 80rem;
    position: relative;
    margin-top: 112rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 100;
    .absolute-block {
        position: absolute;
        top: -172rem;
        right: 0;
    }
    & > img {
        width: 1040rem;
        height: 400rem;
    }
`;
const ProfileContent = styled.div`
    padding-left: 80rem;
    width: 1040rem;
    display: flex;
    gap: 136rem;
    margin-top: 30rem;
    .left-column {
        display: flex;
        flex-direction: column;
        strong {
            font-size: 20rem;
            color: ${Colors.black};
            line-height: 1.3;
            font-weight: 500;
            white-space: nowrap;
        }
    }
    .right-column {
        display: flex;
        flex-direction: column;
        h2 {
            font-size: 20rem;
            color: ${Colors.black};
            line-height: 1.3;
            font-weight: 500;
        }
        span {
            max-width: 509rem;
            font-size: 17rem;
            line-height: 1.5;
            color: ${Colors.black};
            font-weight: 300;
            margin-top: 24rem;
            margin-bottom: 44rem;
        }
        a {
            width: fit-content;
            position: relative;
            font-size: 20rem;
            color: ${Colors.black};
            font-family: var(--fontspring);
            text-decoration: none;
            &::before {
                content: "";
                position: absolute;
                left: 0;
                bottom: -2rem;
                width: 100%;
                height: 1px;
                background-color: ${Colors.black};
                transition: width 0.3s ease-in-out;
            }
        }
        a:hover::before {
            width: 0%;
        }
    }
`;
