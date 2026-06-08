import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

export default function ProductDetails() {
    const { id } = useParams();
    const dispatch = useDispatch();

    const { data, isLoading, error } = useQuery({
        queryKey: ["product", id],
        queryFn: async () => {
            const res = await axios.get(
                `https://dummyjson.com/products/${id}`
            );
            return res.data;
        }
    });

    if (isLoading)
        return <h3 className="text-center mt-5">Loading...</h3>;

    if (error)
        return <h3 className="text-center mt-5">Error loading product</h3>;

    return (
        <div className="container mt-4">

            <div className="row g-4">

                {/* IMAGE */}
                <div className="col-md-5">
                    <div className="card p-3 shadow-sm">
                        <img
                            src={data.images?.[0]}
                            alt={data.title}
                            className="img-fluid"
                            style={{
                                height: "300px",
                                objectFit: "contain"
                            }}
                        />
                    </div>
                </div>

                {/* INFO */}
                <div className="col-md-7">

                    <h2>{data.title}</h2>

                    <p className="text-muted">
                        {data.description}
                    </p>

                    <h3 className="text-success">
                        ${data.price}
                    </h3>

                    <p>
                        ⭐ Rating: {data.rating}
                    </p>

                    <p>
                        📦 Category: {data.category}
                    </p>

                    <button
                        className="btn btn-success mt-3"
                        onClick={() => dispatch(addToCart(data))}
                    >
                        Add to Cart 🛒
                    </button>

                </div>

            </div>

        </div>
    );
}