import { motion, useScroll, useTransform } from "framer-motion";
import { ChildProps } from "@/interface/Interface";
import { useRef } from "react";

export default function ScrollTransformLeft({ children }: ChildProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
    });

    const x = useTransform(scrollYProgress, [1, 0.5], [-150, 0]);
    // const opacity = useTransform(scrollYProgress, [1, 0.5], [0, 1]);
    return (
        <div ref={ref}>
            <motion.div style={{ x }}>{children}</motion.div>
        </div>
    );
}
