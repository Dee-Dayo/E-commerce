import {ProductData} from "../../type";
import {ImCross} from "react-icons/im";
import Link from "next/link";
import {urlFor} from "@/sanity/lib/image";
import Image from 'next/image';
import {useDispatch} from "react-redux";
import {removeFromCart} from "@/redux/jumiaSlice";
import toast from "react-hot-toast";
import FormattedPrice from "@/components/FormattedPrice";


interface Props{
    cart:ProductData[];
    item:ProductData;
}

const CartItem = ({cart, item}: Props) => {
    const dispatch = useDispatch()

    return (
        <div className='w-full grid grid-cols-5 mb-4 border py-2'>
            <div className='flex col-span-5 md:col-span-2 items-center gap-4 ml-4'>
                <ImCross onClick={()=>{
                    dispatch(removeFromCart(item?._id));
                    toast.success(
                        `${item?.title.substring(0, 12)}... removed from cart`
                    )
                }} className='text-accent hover:text-lightRed cursor-pointer duration-300'/>
                <Link href={`/product/${item?.slug.current}`}>
                    <Image
                        src={urlFor(item?.image).url()}
                        alt={item?.title}
                        width={200}
                        height={200}
                        className='w-32 h-32 object-contain'/>
                </Link>
                <h1 className='font-semibold'>{item?.title.substring(0, 20)}</h1>
            </div>
            <div className='col-span-5 md:col-span-3 flex items-center justify-between py-4 md:py-0 px-4 lg:px-0'>
                <p className='flex w-1/3 items-center text-lg font-semibold'>
                    <FormattedPrice amount={item?.price}/>
                </p>
                <div className='w-1/3 flex items-center gap-6 text-lg'>
                    Quantity
                </div>
                <div className='w-1/3 items-center text-lg font-bold'>
                    <FormattedPrice amount={item?.quantity * item?.price} />
                </div>
            </div>
        </div>
    )
}

export default CartItem;