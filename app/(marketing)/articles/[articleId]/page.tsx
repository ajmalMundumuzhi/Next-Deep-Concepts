"use client";

import Link from "next/link"
import { use } from "react";
//  we can't use async await in "use client" components, so we need to use "use" component instead
export default function NewsArticles ({ 
    params, 
    searchParams 
}:{ 
    params: Promise<{ articleId: string }>,
    searchParams: Promise<{ lang: "en" | "fr" | "es" }>
}) {
    const { articleId } = use(params);
    const { lang = "en" } = use(searchParams);
    return <div>
        <h1>News Articles {articleId}</h1>
        <p>Reading In Language: {lang}</p>

        <div>
            <Link href="/articles/{articleId}?lang=en">English </Link>
            <Link href="/articles/{articleId}?lang=fr" className="ml-4">French </Link>
            <Link href="/articles/{articleId}?lang=es" className="ml-4">Spanish </Link>
        </div>
    </div>
}