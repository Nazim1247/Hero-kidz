import React from 'react';
// import products from '@/app/data/toys.json';
import ProductCard from '../cards/ProductCard';
import { getProducts } from '@/actions/server/product';

const Products = async() => {
    const products = await getProducts() || [];
    return (
        <div>
            <h2 className='text-center text-4xl font-bold py-4 rounded mt-5'>Our Products</h2>
            <div className='grid grid-cols-3 gap-4'>
                {
                    products.map((product)=> (<ProductCard key={product.name} product={product}></ProductCard>))
                }
            </div>
        </div>
    );
};

export default Products;