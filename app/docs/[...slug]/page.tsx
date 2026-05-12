export default async function Docs({
    params,
} : {
    params: Promise<{ slug: string[] }>;
}) {
    const { slug } = await params;
    if (slug?.length === 2) {
        return (
            <h1>
                Viewing docs for feature {slug[0]} and concept {slug[1]}
            </h1>
        );
    } else if (slug?.length === 1) {
        return (
            <h1>
                Viewing docs for feature {slug[0]}
            </h1>
        )
    }
    return <h1>Docs Home Page</h1>
}

// Now /docs will be 404 error if rename the slug file to [[...slug]] the same will get in /docs also 