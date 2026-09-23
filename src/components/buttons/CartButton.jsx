"use client";
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const CartButton = ({product}) => {
    const isLogin = false;
    const router = useRouter();
    const path = usePathname();
    const add2Cart = ()=>{
        if(isLogin) alert(product._id)
            else{
        router.push(`/login?callbackUrl=${path}`)
        }
    }
    return (
        <div>
            <button onClick={add2Cart} className="rounded-lg bg-orange-500 px-4 py-2 font-semibold text-white transition hover:bg-orange-600">
            Add to Cart
          </button>
        </div>
    );
};

export default CartButton;