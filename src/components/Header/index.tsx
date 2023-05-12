"use client";

import { styled } from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { Colors } from "@/styles/Colors";

import Logo from "/public/images/icons/icon_logo.png";

export default function Header() {
    return (
        <>
            <HeaderBlock>
                <HeaderInner>
                    <HeaderLogo>
                        <Link href="/">
                            <Image
                                src={Logo}
                                alt="Woo-da"
                                width={89}
                                height={33}
                            />
                        </Link>
                    </HeaderLogo>
                    <HeaderMenu>
                        <Link href="/about">About</Link>
                        <Link href="/work">Work</Link>
                        <Link href="/contact">Contact</Link>
                    </HeaderMenu>
                </HeaderInner>
            </HeaderBlock>
            <HeaderPadding />
        </>
    );
}

const HeaderBlock = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 105px;
    padding: 0 80rem;
    background-color: ${Colors.white};
    z-index: 9999;
`;
const HeaderInner = styled.div`
    width: 100%;
    height: inherit;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const HeaderLogo = styled.div`
    height: inherit;
    display: flex;
    align-items: center;
    a {
        height: inherit;
        display: flex;
        align-items: center;
    }
`;
const HeaderMenu = styled.div`
    height: inherit;
    display: flex;
    align-items: center;
    gap: 32rem;
    a {
        height: inherit;
        display: flex;
        align-items: center;
        text-decoration: none;
        font-size: 22px;
        color: ${Colors.black};
        font-weight: 500;
    }
`;
const HeaderPadding = styled.div`
    padding-top: 105px;
`;
