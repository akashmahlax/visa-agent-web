import { NavLink } from 'react-router-dom';

const Navbar = () => (
    <nav className="bg-primary text-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center p-4">
            <h1 className="text-2xl font-bold">Vinay Harry Visa Consultant</h1>
            <div className="space-x-4">
                <NavLink className={({ isActive }) => isActive ? "text-accent font-semibold" : ""} to="/">Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? "text-accent font-semibold" : ""} to="/about">About</NavLink>
                <NavLink className={({ isActive }) => isActive ? "text-accent font-semibold" : ""} to="/services">Services</NavLink>
                <NavLink className={({ isActive }) => isActive ? "text-accent font-semibold" : ""} to="/contact">Contact</NavLink>
            </div>
        </div>
    </nav>
);

export default Navbar;