import { Metadata } from "next";

type Props = {
    params: Promise<{ productId: string }>
}

export const generateMetaData = async ({
    params,
}: Props): Promise<Metadata> =>{
    const id = (await params).productId;
    const title = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Iphone ${id}`);
        }, 100)
    });
    return {
        title: `Product ${title}`,
    }
}
export default async function ProductDetails({
    params,
} : {
    params: Promise<{ productId: string }>
}) {
        const productId = (await params).productId;
        return <h1>Details about the product (Dynamic routes) {productId}</h1>
}