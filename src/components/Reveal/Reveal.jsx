import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export const Reveal = ({ children, width = "fit-content", height = "auto", delay = 0.25 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-75px" });

    return (
        <div ref={ref} style={{ position: "relative", width, height }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.5, delay: delay, ease: "easeOut" }}
                style={{ height: "100%" }}
            >
                {children}
            </motion.div>
        </div>
    );
};
