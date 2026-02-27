"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import StructuredData from "./StructuredData";

export default function Breadcrumbs() {
    const pathname = usePathname();
    if (pathname === "/") return null;

    const paths = pathname.split("/").filter((p) => p);

    // Create Breadcrumb Schema
    const breadcrumbList = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://serengeretreat.com"
            },
            ...paths.map((path, index) => ({
                "@type": "ListItem",
                "position": index + 2,
                "name": path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, " "),
                "item": `https://serengeretreat.com/${paths.slice(0, index + 1).join("/")}`
            }))
        ]
    };

    return (
        <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-6 py-4 flex items-center space-x-2 text-xs uppercase tracking-widest text-ink-muted">
            <StructuredData data={breadcrumbList} />
            <Link href="/" className="hover:text-earth transition-colors">Home</Link>
            {paths.map((path, index) => {
                const href = `/${paths.slice(0, index + 1).join("/")}`;
                const isLast = index === paths.length - 1;
                const label = path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, " ");

                return (
                    <div key={href} className="flex items-center space-x-2">
                        <ChevronRight size={10} className="text-earth/40" />
                        {isLast ? (
                            <span className="text-earth font-medium">{label}</span>
                        ) : (
                            <Link href={href} className="hover:text-earth transition-colors">{label}</Link>
                        )}
                    </div>
                );
            })}
        </nav>
    );
}
