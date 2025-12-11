"use client";

import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface CountUpProps {
    value: number;
    suffix?: string;
    prefix?: string;
    decimals?: number;
    className?: string;
}

export default function CountUp({
    value,
    suffix = "",
    prefix = "",
    decimals = 0,
    className = "",
}: CountUpProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-20px" });

    const spring = useSpring(0, {
        mass: 0.8,
        stiffness: 75,
        damping: 15,
    });

    const display = useTransform(spring, (latest) =>
        `${prefix}${latest.toFixed(decimals)}${suffix}`
    );

    useEffect(() => {
        if (inView) {
            spring.set(value);
        }
    }, [inView, spring, value]);

    return <motion.span ref={ref} className={className}>{display}</motion.span>;
}
