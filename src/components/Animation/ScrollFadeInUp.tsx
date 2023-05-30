import { motion, Variants } from "framer-motion";
import { ChildProps } from "@/interface/Interface";

export default function ScrollFadeInUp({ children }: ChildProps) {
    const ScrollFadeInVariant: Variants = {
        offscreen: {
            opacity: 0,
            y: 50,
        },
        onscreen: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <motion.div
            initial="offscreen"
            animate="onscreen"
            viewport={{ once: true, amount: 0.5 }}
        >
            <motion.div variants={ScrollFadeInVariant}>{children}</motion.div>
        </motion.div>
    );
}
