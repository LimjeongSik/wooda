"use client";

import { useCallback, useState } from "react";
import { css, styled } from "styled-components";
import { Colors } from "@/styles/Colors";

import { ChildProps, MouseMoveEventProsp } from "@/interface/Interface";

export default function BasicLayout({ children }: ChildProps) {
    const [mousePosition, setMousePosition] = useState<MouseMoveEventProsp>({
        x: 0,
        y: 0,
    });

    const onMouseMove = useCallback((e: React.MouseEvent) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        setMousePosition({ x: mouseX, y: mouseY });
    }, []);

    return (
        <Block onMouseMove={onMouseMove}>
            <MousePointer move={mousePosition} />
            {children}
        </Block>
    );
}

const Block = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${Colors.white};
`;
const MousePointer = styled.div.attrs<{ move: MouseMoveEventProsp }>(
    (props) => ({
        style: {
            transform: `translate(${props.move.x}px, ${props.move.y}px)`,
        },
    }),
)`
    position: fixed;
    border-radius: 50%;
    width: 72rem;
    height: 72rem;
    left: -36rem;
    top: -36rem;
    border: 3px solid ${Colors.black};
    background-color: ${Colors.white};
    z-index: 99999;
    pointer-events: none;
`;
