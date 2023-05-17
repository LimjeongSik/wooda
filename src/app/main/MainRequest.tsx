import { styled } from "styled-components";
import Image from "next/image";

import Arrow from "/public/images/icons/icon_fill_arrow.png";
import { Colors } from "@/styles/Colors";

export default function MainRequest() {
    return (
        <Block>
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
        </Block>
    );
}

const Block = styled.div`
    width: 100%;
    padding-left: 307rem;
    padding-right: 80rem;
`;
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
