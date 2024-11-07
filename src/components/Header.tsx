import Container from "@/components/Container";
import Logo from "@/components/Logo";

const Header = () => {
    return (
        <header className="w-full h-20 bg-accentWhite border-b-[1px] border-b-lightText/50">
        <Container className='h-full flex items-center justify-between gap-5 lg:10'>
           <Logo/>
            <div>search</div>
            <div></div>
        </Container>
    </header>
    );
}

export default Header;