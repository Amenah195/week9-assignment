import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../api/productsApi";
import ProductCard from "../components/ProductCard";
import { useContext } from "react";
import { SettingsContext } from "../context/SettingsContext";


export default function Home() {

    const { state } = useContext(SettingsContext);


    const {
        data = [],
        isLoading,
        error
    } = useQuery({
        queryKey: ["products"],
        queryFn: fetchProducts
    });

    if (isLoading)
        return <h2>Loading...</h2>;

    if (error)
        return <h2>Error loading products</h2>;

    const filteredProducts = data
        .filter((p) =>
            p.title
                .toLowerCase()
                .includes(state.search.toLowerCase())
        )
        .filter((p) =>
            state.category === "all"
                ? true
                : p.category === state.category
        );


    return (
        <div className="container mt-4">
            <div className="row g-3">
                {filteredProducts.map(product => (

                    <div key={product.id} className={state.view === "grid" ? "col-md-3" : "mb-3"}>
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </div>
    );
}