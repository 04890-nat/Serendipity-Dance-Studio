import { Link, NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || !isHome ? 'bg-[var(--background)]/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold tracking-tight">
                    <span className="text-gradient">動見舞蹈</span>
                </Link>

                <div className="hidden md:flex space-x-8 items-center">
                    <NavItem to="/about" label="關於我們" />
                    <NavItem to="/courses" label="課程介紹" />
                    <NavItem to="/achievements" label="學生成果" />
                    <NavItem to="/venue" label="場地設備" />
                    <Link to="/contact" className="btn btn-primary">
                        立即報名
                    </Link>
                </div>

                {/* Mobile Menu Button Placeholder */}
                <div className="md:hidden text-[var(--foreground)]">
                    Menu
                </div>
            </div>
        </nav>
    );
}

function NavItem({ to, label }: { to: string; label: string }) {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `text-[var(--foreground)] hover:text-primary transition-colors font-medium ${isActive ? 'text-primary' : ''}`
            }
        >
            {label}
        </NavLink>
    );
}
