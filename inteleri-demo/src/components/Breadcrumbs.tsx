"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";
import { Fragment } from "react";

export function Breadcrumbs() {
    const pathname = usePathname();
    const segments = pathname.split("/").filter(Boolean);

    if (segments.length === 0) return null;

    return (
        <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center space-x-2 text-sm text-muted">
                <li>
                    <Link
                        href="/"
                        className="hover:text-neon-1 transition-colors flex items-center"
                    >
                        <Home className="w-4 h-4" />
                        <span className="sr-only">Home</span>
                    </Link>
                </li>
                {segments.map((segment, index) => {
                    const href = `/${segments.slice(0, index + 1).join("/")}`;
                    const isLast = index === segments.length - 1;
                    const label = segment.charAt(0).toUpperCase() + segment.slice(1);

                    return (
                        <Fragment key={href}>
                            <ChevronRight className="w-4 h-4 opacity-50" />
                            <li>
                                {isLast ? (
                                    <span className="text-neon-1 font-medium" aria-current="page">
                                        {label}
                                    </span>
                                ) : (
                                    <Link
                                        href={href}
                                        className="hover:text-neon-1 transition-colors"
                                    >
                                        {label}
                                    </Link>
                                )}
                            </li>
                        </Fragment>
                    );
                })}
            </ol>
        </nav>
    );
}
