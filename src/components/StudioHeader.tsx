import {IoReturnDownBack} from "react-icons/io5";
import Link from "next/link";
import Logo from "@/components/Logo";

const StudioHeader = (props) => {
    return <div>
        <div className='p-5 bg-accent text-gray-100 flex items-center justify-between'>
            <Link href={'/'} className='flex items-center gap-3 font-semibold hover:text-darkOrange hoverEffect'>
                <IoReturnDownBack className='text-2xl'/> Go to Website
            </Link>
            <Logo className='text-white'/>
            <p className='hidden md:inline-flex text-sm'>Admin Studio for JUMIA Online Shopping</p>
        </div>
        {props.renderDefault(props)}
    </div>
}

export default StudioHeader;