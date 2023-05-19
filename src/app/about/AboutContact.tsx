"use client";

import BlockTemplate from "@/components/Template/BlockTemplate";
import { Colors } from "@/styles/Colors";
import { styled } from "styled-components";

export default function AboutContact() {
    return (
        <BlockTemplate styles={{ paddingBottom: "320rem" }}>
            <ContactBlock>
                <ContactStyle>
                    FEEL FREE
                    <br />
                    TO CONTACT ME IF YOU
                    <br />
                    HAVE ANY PROJECTS
                    <br />
                    TO REQUEST.
                </ContactStyle>
            </ContactBlock>
        </BlockTemplate>
    );
}
const ContactBlock = styled.div`
    text-align: center;
`;
const ContactStyle = styled.strong`
    font-size: 136rem;
    color: ${Colors.black};
    text-align: center;
    font-family: var(--fontspring);
`;
