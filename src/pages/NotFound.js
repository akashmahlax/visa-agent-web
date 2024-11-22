import { Link } from 'react-router-dom';

const NotFound = () => (
    <section className="bg-secondary min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold text-primary mb-4">404</h1>
        <p className="text-lg text-gray-700 mb-6">Oops! The page you're looking for doesn't exist.</p>
        <Link to="/" className="bg-primary text-white px-4 py-2 rounded hover:bg-accent transition">
            Go Back Home
        </Link>
    </section>
);

export default NotFound;
