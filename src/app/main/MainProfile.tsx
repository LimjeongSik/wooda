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
                <Image src={Profile} width={300} height={300} alt="profile" />
                <ProfileContent>
                    <div className="left-column">
                        <strong>for Design</strong>
                        <strong>with Design</strong>
                        <strong>from Design</strong>
                    </div>
                    <div className="right-column">
                        <h2>UXUI,Graphic Designer</h2>
                        <span>
                            안녕하세요 난 우다에요 웹사이트 디자이너. 이해하고
                            철학을 만드는 디자인은 사용자에게 보다 풍부한 경험과
                            보다 심플한 메시지를 줄 수 있습니다. 온전히
                            웹서비스에 담아낼 수 있도록 노력합니다. 어쩌구
                            저쩌구 저를 소개할 수 있는말이 무엇일까요 나는
                            킹왕짱입니다. 저를 사용하십시오.
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
            max-width: 581rem;
            font-size: 17rem;
            line-height: 1.5;
            color: ${Colors.black};
            font-weight: 300;
            margin-top: 24rem;
            margin-bottom: 44rem;
        }
        a {
            font-size: 20rem;
            color: ${Colors.black};
            font-family: var(--fontspring);
        }
    }
`;
