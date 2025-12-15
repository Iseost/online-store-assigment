
import { useEffect, useState } from "react";
import { getProducts } from "../api/productsApi.jsx";

export function useProducts() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;
        async function fetchData() {
            try {
                const data = await getProducts();
                if (isMounted) setProducts(data);
            } catch (err) {
                if (isMounted) setError(err.message);
            } finally {
                if (isMounted) setLoading(false);
            }
        }
        fetchData();
        return () => {
            isMounted = false;
        };
    }, []);
    return { products, loading, error };
}
