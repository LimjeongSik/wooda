"use client";

import { styled } from "styled-components";
import { Colors } from "@/styles/Colors";
import { MixTitleProps } from "@/interface/Interface";

export default function MixTitle({
    title,
    mixTitle,
    subTitle,
    classname,
}: MixTitleProps) {
    return (
        <Block className={classname}>
            <h1 className="fontspring">
                {title}
                <span>{mixTitle}</span>
            </h1>
            <span>{subTitle}</span>
        </Block>
    );
}

const Block = styled.div`
    h1 {
        font-size: 230rem;
        color: ${Colors.black};
        letter-spacing: -2.22px;
        span {
            font-size: 230rem;
            color: ${Colors.black};
            letter-spacing: -2.22px;
            font-weight: 400;
            font-family: var(--pretendard);
            margin-left: 0;
        }
    }
    span {
        font-size: 44rem;
        color: ${Colors.black};
        font-weight: 500;
        margin-left: 460rem;
    }
`;
