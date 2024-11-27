import Container from "@/components/Container";
import Logo from "@/components/Logo";
import Search from "@/components/Search";
import {navBarList} from "@/ constants";
import Link from "next/link";
import {HiMenuAlt2} from "react-icons/hi";

const Header = () => {
    return (
        <header className="w-full h-20 bg-accentWhite border-b-[1px] border-b-lightText/50 sticky z-50 top-0 left-0">
        <Container className='h-full flex items-center justify-between gap-5 lg:10'>
           <Logo/>
            <Search/>
            <div className='hidden md:inline-flex items-center gap-7'>
                {navBarList?.map((item)=>(
                    <Link key={item?.title} href={item?.link} className='navBarItem'>
                        {item?.title}
                    </Link>
                ))}
                <Link href={'/signin'} className='navBarItem'>
                    Sign In
                </Link>
                <Link href={'/studio'} className='navBarItem'>
                    Studio
                </Link>
            </div>
            <HiMenuAlt2 className='inline-flex md:hidden cursor-pointer text-2xl hoverEffect hover:text-darkOrange font-bold'/>
        </Container>
    </header>
    );
}

export default Header;