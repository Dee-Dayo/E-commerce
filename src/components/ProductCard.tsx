import {ProductData} from "../../type";
import Link from "next/link";
import Image from "next/image";
import {urlFor} from "@/sanity/lib/image";
import {MdStar} from "react-icons/md";

const ProductCard = ({item}: {item: ProductData}) => {
    return (
        <div className='border border-px border-lightText/40 rounded-md relative group overflow-hidden'>
           <div className='overflow-hidden'>
                <Link href={`/product/${item?.slug.current}`}>
                <Image
                    src={urlFor(item?.image).url()}
                    alt={item?._type}
                    width={500}
                    height={500}
                    className='w-full h-72 object-contain group-hover:scale-105 hoverEffect'
                />
            </Link>
           </div>
            <div className='px-6 flex flex-col items-center gap-2'>
                <div className='text-base text-lightText flex items-center'>
                    {Array?.from({length:5})?.map((_,index)=>{
                        const filled = index +1 <= Math.floor(item?.ratings);
                        const halfFilled = index +1 > Math.floor(item?.ratings) && index < Math.ceil(item?.ratings);
                        return (
                            <MdStar className={`${filled ? "text-[#fa8900]":halfFilled ? "text-yellow-300" : "text-lightText"}`} key={index}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ProductCard;