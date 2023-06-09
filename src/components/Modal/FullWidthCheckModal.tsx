"use client";

import { styled } from "styled-components";

export default function FullWidthCheckModal() {
    const fullScreen = () => {
        const elem: HTMLElement = document.documentElement;
        elem.requestFullscreen();
    };

    return (
        <Block>
            <Modal>
                최소 1400이상 넓이를 유지해주세요.
                <button
                    onClick={() => {
                        fullScreen();
                    }}
                >
                    전체화면으로 보기
                </button>
            </Modal>
        </Block>
    );
}

const Block = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    cursor: auto;
`;
const Modal = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    height: 50%;
    background-color: #fff;
    border-radius: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20rem;
    box-shadow: 0px 1px 15px 1px rgba(0, 0, 0, 0.4);
    cursor: auto;
`;
