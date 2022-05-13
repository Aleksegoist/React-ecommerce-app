import React, { useEffect, useLayoutEffect, useState } from 'react';

const Products = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([data]);
    const [loading, setLoading] = useState([false]);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch('https://fakestoreapi.com/products');
        };
        setProducts();
        if (componentMounted) {
            setData(await response.clone().json()); 
            setFilter(await response.json())
            setLoading(false)
            console.log(filter);
        }
        return () => {
            componentMounted = false;
        }
    }, []);

    return <div>Products</div>;
};

export default Products;
