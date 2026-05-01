'use client';

import { motion } from "framer-motion";

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    accent?: string;
}

export function SectionHeading({ title, subtitle, accent }: SectionHeadingProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-12"
        >
            <div className="flex items-center gap-4 mb-3">
                <div className="h-px w-8 bg-accent" />
                {accent && (
                    <span className="text-accent text-xs font-mono uppercase tracking-[0.2em]">
                        {accent}
                    </span>
                )}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                {title} <span className="text-accent">.</span>
            </h2>
            {subtitle && (
                <p className="mt-3 text-muted max-w-xl text-base leading-relaxed">
                    {subtitle}
                </p>
            )}
        </motion.div>
    );
}
