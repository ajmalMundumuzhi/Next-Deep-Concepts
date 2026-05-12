"use client"
import { useRouter } from "next/navigation";

export default function PlaceOrderPage() {
    const router = useRouter();
    const handleClick = () => {
        console.log("Placing order...");
        router.push("/");
    }
    return (<>
        <h1>Place Order Page</h1>
        
        <button onClick={handleClick} className="ml-4">Place Order</button>
    </>)
}