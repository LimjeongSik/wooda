"use client";

import { styled } from "styled-components";
import Image from "next/image";

import Arrow from "/public/images/icons/icon_fill_arrow.png";
import { Colors } from "@/styles/Colors";
import BlockTemplate from "@/components/Template/BlockTemplate";

export default function MainRequest() {
    return (
        <BlockTemplate
            styles={{ paddingLeft: "307rem", paddingRight: "80rem" }}
        >
            <RequestContent>
                <strong>
                    FEEL FREE
                    <br />
                    TO CONTACT ME IF YOU
                    <br />
                    HAVE ANY PROJECTS
                    <br />
                    TO REQUEST.
                </strong>

                <Image src={Arrow} alt="request" />
            </RequestContent>
        </BlockTemplate>
    );
}

const RequestContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30rem;
    strong {
        font-size: 136rem;
        color: ${Colors.black};
        font-family: var(--fontspring);
        text-align: right;
    }
    img {
        width: 460rem;
        height: 263rem;
        margin-left: 567rem;
    }
`;
