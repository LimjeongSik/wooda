"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { throttle } from "lodash";

import { css, styled } from "styled-components";
import { Colors } from "@/styles/Colors";

import Logo from "/public/images/icons/icon_logo.png";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const beforeScrollY = useRef(0);

    const onScroll = useMemo(
        () =>
            throttle(() => {
                const currentScrollY = window.scrollY;
                if (beforeScrollY.current <= currentScrollY) {
                    setIsMenuOpen(true);
                } else {
                    setIsMenuOpen(false);
                }
                beforeScrollY.current = currentScrollY;
            }, 250),
        [],
    );

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [onScroll, isMenuOpen]);

    return (
        <>
            <HeaderBlock $os={isMenuOpen}>
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

const HeaderBlock = styled.div<{ $os: boolean }>`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 105px;
    padding: 0 80rem;
    background-color: ${Colors.white};
    z-index: 9999;
    transition: all 0.2s ease-in-out;

    ${(props) =>
        props.$os &&
        css`
            transform: translateY(-105px);
        `}
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
