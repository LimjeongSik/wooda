"use client";

import Lorem from "@/components/Lorem";
import BlockTemplate from "@/components/Template/BlockTemplate";
import { Colors } from "@/styles/Colors";
import { styled } from "styled-components";

export default function ContactInfo() {
    return (
        <BlockTemplate
            styles={{
                paddingLeft: "80rem",
                paddingRight: "80rem",
                paddingTop: "75rem",
                height: "100%",
            }}
        >
            <ContactInfoBlock>
                <ContactLorem>
                    <Lorem />
                </ContactLorem>
                <ContactInfoContents>
                    <strong>
                        <span>+</span>82
                        <br />
                        10<span>-</span>3359<span>-</span>0320
                    </strong>
                    <strong>
                        whh5080<span>@</span>gmail.com
                    </strong>
                </ContactInfoContents>
            </ContactInfoBlock>
            <ContactInfoContentsItem>
                <strong>W-D® UX/UI DESIGNER</strong>
                <strong>©2023 Copyright - WooDa</strong>
            </ContactInfoContentsItem>
        </BlockTemplate>
    );
}

const ContactInfoBlock = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-end;
    height: calc(100% - 108rem);
`;
const ContactLorem = styled.div`
    position: absolute;
    left: 0;
    top: 30rem;
    & > div {
        font-size: 18rem;
    }
`;
const ContactInfoContents = styled.div`
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    text-align: right;
    strong:first-child {
        width: fit-content;
        text-align: left;
    }
    strong {
        font-size: 150rem;
        font-weight: 300;
        font-family: var(--fontspring);
        color: ${Colors.black};

        span {
            font-family: var(--pretendard);
        }
    }
`;
const ContactInfoContentsItem = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 108rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 80rem;
    strong {
        font-size: 18rem;
        color: ${Colors.black};
    }
`;
