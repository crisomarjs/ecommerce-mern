import React, { useState, useEffect } from "react";
import UserList from "../../components/UserList/UserList";
import "./Products.css";

function Products() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);
    const [token, setToken] = useState(null);

    useEffect(() => {
        setToken(localStorage.getItem("token"));
    }, []);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch("https://d-and-j-diner.onrender.com/product");
                const data = await res.json();
                setProducts(data);
            } catch (error) {
                setError((prev) => error.message);
                console.log(error);
            }
        };
        fetchProduct();
    }, []);

    if (!token) {
        return (
            <div className="not-authorized">
                <h2>No estas autorizado, Por favor Inicia Sesion</h2>
            </div>
        );
    } else {
        return (
            <div className="show-user-products">
                {!error && <UserList products={products ? products : []} />}
                {error && <h1>No hay productos o el servidor no responde</h1>}
            </div>
        );
    }
}

export default Products;
