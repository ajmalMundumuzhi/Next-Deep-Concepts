import Link from "next/link"

export default function ProductsPage() {
    const productId = 100;
    return (
        <div>
            <h1>Products Page</h1>
            <p>Welcome to the products page. Here you can find all our amazing products!</p>

            <h2>Product 1</h2>
            <h2>Product 2</h2>
            <h2>
                <Link href={`/products/3`} replace> 
                    Product 3
                </Link>
            </h2>
            <h2>
                <Link href={`/products/${productId}`}>
                    Product 4
                </Link>
            </h2>
        </div>
    )
}