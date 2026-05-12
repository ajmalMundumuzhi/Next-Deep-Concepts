export default async function ReviewDetails({
    params,
} : {
    params: Promise<{ productId: string }>
}) {
    const productId  = (await params).productId;
    return (
        <>
            <h1>Reviews for Product {productId}</h1>

            <li>Review 1</li>
            <li>Review 2</li>
            <li>Review 3</li>
            <li>Review 4</li>
        </>
    )
}