import Button from "@/atoms/button";
import Logo from "@/atoms/logo";
import NavItem from "@/atoms/navbar-item";

export default function NavBar() {
    return (
        <nav className="relative container mx-auto p-6">
            <div className="flex items-center justify-between">
                <div className="pt-2">
                    <Logo />
                </div>
                <div className="hidden md:flex space-x-6 items-center">
                    <NavItem text="Home" href="/" active={true} />
                    <NavItem text="About" href="/" active={false} />
                    <NavItem text="Docs" href="/" active={false} />
                    <NavItem text="Support" href="/" active={false} />
                    <div className="hidden md:block">
                        <Button text="Login" />
                    </div>
                </div>
            </div>
        </nav>
    )
}
