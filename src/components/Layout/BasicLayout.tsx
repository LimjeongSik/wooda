"use client";

import { useCallback, useEffect, useState } from "react";
import { styled } from "styled-components";
import { Colors } from "@/styles/Colors";

import { ChildProps, MouseMoveEventProsp } from "@/interface/Interface";
import FullWidthCheckModal from "../Modal/FullWidthCheckModal";

export default function BasicLayout({ children }: ChildProps) {
    const [fullWidth, setFullWidth] = useState<boolean>(true);
    const [isUpDown, setIsUpDown] = useState<boolean>(false);

    const [mousePosition, setMousePosition] = useState<MouseMoveEventProsp>({
        x: 0,
        y: 0,
    });

    const onMouseMove = useCallback((e: React.MouseEvent) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        setMousePosition({ x: mouseX, y: mouseY });
    }, []);

    const onFullWidthCheck = useCallback(() => {
        if (window.innerWidth < 1400) {
            setFullWidth(false);
        } else {
            setFullWidth(true);
        }
    }, []);

    const isMouseDown = useCallback(() => {
        setIsUpDown(true);
    }, []);
    const isMouseUp = useCallback(() => {
        setTimeout(() => {
            setIsUpDown(false);
        }, 300);
    }, []);

    useEffect(() => {
        onFullWidthCheck();
        isMouseDown();
        isMouseUp();
        window.addEventListener("resize", onFullWidthCheck);
        return () => {
            window.removeEventListener("resize", onFullWidthCheck);
            onFullWidthCheck();
            isMouseDown();
            isMouseUp();
        };
    }, [isMouseDown, isMouseUp, onFullWidthCheck]);

    return (
        <>
            {fullWidth ? (
                <Block
                    onMouseMove={onMouseMove}
                    onMouseDown={isMouseDown}
                    onMouseUp={isMouseUp}
                >
                    <MousePointer move={mousePosition} $mouse={isUpDown} />
                    {children}
                </Block>
            ) : (
                <FullWidthCheckModal />
            )}
        </>
    );
}

const Block = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${Colors.white};
    display: flex;
    flex-direction: column;
`;
const MousePointer = styled.div.attrs<{
    move: MouseMoveEventProsp;
    $mouse: boolean;
}>((props) => ({
    style: {
        transform: `translate3d(${props.move.x}px, ${props.move.y}px, 0px) ${
            props.$mouse ? "scale3d(0.8, 0.8, 0.8)" : "scale3d(1, 1, 1)"
        } rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
    },
}))`
    will-change: transform;
    position: fixed;
    border-radius: 50%;
    width: 72rem;
    height: 72rem;
    left: -36rem;
    top: -36rem;
    border: 3px solid ${Colors.white};
    z-index: 99999;
    pointer-events: none;
    mix-blend-mode: difference;
    transform-style: preserve-3d;
    transition-duration: 0.2s;
    transition-timing-function: ease-out;
`;
