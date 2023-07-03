import { useRef } from "react";

export default function useMoveScroll() {
    const elementRef = useRef<HTMLDivElement>(null);
    const onMoveScroll = () => {
        elementRef.current &&
            elementRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
    };

    return { elementRef, onMoveScroll };
}
