"use client";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

export default function ScrollArrowSvg() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["1 1", "0 0.5"],
    });

    return (
        <div ref={ref}>
            <motion.svg
                viewBox={"0 0 454 244"}
                xmlns={"http://www.w3.org/2000/svg"}
            >
                <motion.g
                    stroke={"none"}
                    strokeWidth={"1"}
                    fill={"none"}
                    fillRule={"evenodd"}
                >
                    <motion.g
                        transform={"translate(-867.000000, -3964.000000)"}
                        stroke={"#282828"}
                        strokeWidth={"3.816"}
                    >
                        <motion.path
                            initial={{ pathLength: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            fill={"none"}
                            d={
                                "M1318.59034,3965 C1288.68434,4009.844 1237.19634,4037.471 1183.85234,4041.515 C1150.69934,4044.028 1120.18934,4034.952 1088.54934,4026.637 C1057.95634,4018.597 1025.09034,4012.483 994.746336,4024.885 C920.358336,4055.288 904.276336,4157.271 903.105336,4183.179 C902.801336,4189.889 902.741336,4203.23 907.977336,4205.043 C918.903336,4208.824 943.370336,4158.924 944.308336,4159.465 C945.212336,4159.987 924.506336,4207.728 907.977336,4205.043 C903.430336,4204.304 902.840336,4200.34 891.724336,4190.069 C880.221336,4179.44 869.272336,4172.986 869.005336,4173.336 C868.774336,4173.639 875.954336,4179.782 907.977336,4205.043"
                            }
                            strokeDasharray="0 1"
                            style={{
                                pathLength: scrollYProgress,
                            }}
                        />
                    </motion.g>
                </motion.g>
            </motion.svg>
        </div>
    );
}
