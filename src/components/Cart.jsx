import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { delItem } from '../redux/actions/index';

const Cart = () => {
    const state = useSelector((state) => state.handleCart);
    const dispatch = useDispatch();

    const handleClose = (item) => {
        dispatch(delItem(item));
    };

    const cartItems = (product) => {
        return (
            <>
                <div className='px-4 my-5 bg-light rounded-3' key={product.id}>
                    <div className='container py-4'>
                        <button
                            onClick={() => handleClose(product)}
                            className='btn-close float-end'
                            aria-label='Close'
                        ></button>
                        <div className='row justify-content-center'>
                            <div className='col-md-4'>
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    height='180px'
                                    width='200px'
                                />
                            </div>
                            <div className='col-md-4'>
                                <h3>{product.title}</h3>
                                <p className='lead fw-bold'>${product.price}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    };

    const emptyCart = () => {
        return (
            <div className='px-4 my-5 bg-light rounded-3 py-5'>
                <div className='container py-4'>
                    <div className='row'>
                        <h3>Your Cart is Empty</h3>
                    </div>
                </div>
            </div>
        );
    };

    const button = () => {
        return (
            <div className='container'>
                <div className='row'>
                    <Link
                        to='/checkout'
                        className='btn btn-outline-dark mb-5 w-25 mx-auto'
                    >
                        Proceed to checkout
                    </Link>
                </div>
            </div>
        );
    };

    return (
        <>
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map(cartItems)}
            {state.length !== 0 && button()}
        </>
    );
};

export default Cart;
