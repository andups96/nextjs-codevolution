import Link from 'next/link'

export default function ProductList() {
    const productId = 1234;
    return (
        <div>
            <Link href="/">Go to Home</Link>
            <h1>List of Products</h1>
            <table className="w-full">
                <thead>
                    <tr>
                        <th className="text-left">Product Name</th>
                        <th className="text-left">Price</th>
                        <th className="text-left">Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="py-2">
                            <Link href="/products/1">Product 1</Link>
                        </td>
                        <td className="py-2">$10.00</td>
                        <td className="py-2">Description of Product 1</td>
                    </tr>
                    <tr>
                        <td className="py-2">
                            <Link href="/products/2">Product 2</Link>
                        </td>
                        <td className="py-2">$20.00</td>
                        <td className="py-2">Description of Product 2</td>
                    </tr>
                    <tr>
                        <td className="py-2">
                            <Link href="/products/3">Product 3</Link>
                        </td>
                        <td className="py-2">$30.00</td>
                        <td className="py-2">Description of Product 3</td>
                    </tr>
                    <tr>
                        <td className="py-2">
                            <Link href="/products/4" replace>Product 4</Link>
                        </td>
                        <td className="py-2">$40.00</td>
                        <td className="py-2">Description of Product 4</td>
                    </tr>
                    <tr>
                        <td className="py-2">
                            <Link href={`/products/${productId}`}>Product {productId}</Link>
                        </td>
                        <td className="py-2">${productId * 10}.00</td>
                        <td className="py-2">Description of Product {productId}</td>
                    </tr>
                    </tbody>
                    </table>
        </div>
    );
}