import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function ProductDetails() {
    const { id } = useParams();

    const { data, isLoading } = useQuery({
        queryKey: ["product", id],
        queryFn: async () => {
            const res = await axios.get(
                `https://dummyjson.com/products/${id}`
            );

            return res.data;
        }
    });

    if (isLoading)
        return <h2>Loading...</h2>;

    return (
        <div>
            <img
                src={data.images?.[0]}
                alt={data.title}
                width="250"
            />

            <h2>{data.title}</h2>

            <p>{data.description}</p>

            <h3>${data.price}</h3>
        </div>
    );
}