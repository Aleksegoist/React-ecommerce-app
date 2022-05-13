import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);

    return <div>Product</div>;
};

export default Product;
