"use client";

import { styled } from "styled-components";
import { Colors } from "@/styles/Colors";
import BlockTemplate from "@/components/Template/BlockTemplate";
import ScrollArrowSvg from "@/components/Animation/ScrollArrowSvg";

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
                <ScrollArrowSvg />
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

    svg {
        width: 460rem;
        height: 263rem;
        margin-left: 567rem;
    }
`;
