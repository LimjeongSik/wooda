"use client";

import Image from "next/image";
import { styled } from "styled-components";
import { Colors } from "@/styles/Colors";

import Logo from "/public/images/icons/icon_logo.png";

export default function Footer() {
    return (
        <FooterBlock>
            <FooterContents>
                <div className="flexbox">
                    <FooterContent>
                        I’M
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DESIGNS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SIMPLE
                        <br />
                        DETAILED&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AND
                        <br />
                        WITH&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;YOUR LIFE
                        <br />
                        UXUI DESIGNER&nbsp;&nbsp;&nbsp;&nbsp; INSIGHT
                    </FooterContent>
                    <FooterContent className="contact">
                        whh5080@gmail.com
                        <br />
                        +82)10-3359-0320
                    </FooterContent>
                </div>
                <FooterContent>From, Korea</FooterContent>
            </FooterContents>
            <Image src={Logo} alt="woo-da" />
        </FooterBlock>
    );
}

const FooterBlock = styled.footer`
    width: 100%;
    padding: 35rem 80rem 41rem;
    background-color: ${Colors.white};
    border-top: 1px solid ${Colors.black};

    img {
        width: 74rem;
        height: 25rem;
        margin-top: 120rem;
    }
`;
const FooterContents = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    .flexbox {
        display: flex;
        .contact {
            margin-left: 480rem;
        }
    }
`;
const FooterContent = styled.div`
    font-size: 20rem;
    color: ${Colors.black};
    font-weight: 500;
    line-height: 1.2;
`;
