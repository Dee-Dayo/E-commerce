'use client'

import {useSelector} from "react-redux";
import {ProductData, StoreState} from "../../type";
import CartItem from "@/components/CartItem";

const CartContainer = () => {
    const {cart} = useSelector((state:StoreState) => state?.jumia);

    return (
        <div>
            {cart?.length > 0 ? (
                <div className='pb-20'>
                    <div className='w-full h-20 bg-[#f5f5f5] text-accent lg:grid grid-cols-5 place-content-center px-6 text-lg font-semibold'>
                        <h2 className='col-span-2'>Product</h2>
                        <h2>Price</h2>
                        <h2>Quantity</h2>
                        <h2>Sub Total</h2>
                    </div>
                    <div className='mt-5'>
                        {cart?.map((item:ProductData)=>(
                            <CartItem key={item?._id} cart={cart} item={item} />
                        ))}
                    </div>
                </div>
            ): (
                <div>No product</div>
            )}
        </div>
    )
}

export default CartContainer;