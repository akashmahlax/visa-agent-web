const About = () => (
    <section className="bg-secondary py-10">
        <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">About Us</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
                Vinay Harry Visa Consultant has been a trusted name in visa consultancy for over a decade.
                Our mission is to simplify visa processes for students, professionals, and families, helping
                them achieve their global aspirations. Our expertise covers student visas, work permits, and
                immigration solutions tailored to your unique needs.
            </p>
            <div className="mt-8">
                <img
                    src="/assets/vinay-harry.jpg"
                    alt="Vinay Harry"
                    className="rounded-full w-40 mx-auto"
                />
                <h3 className="mt-4 text-xl font-semibold text-primary">Vinay Harry</h3>
                <p className="text-gray-600">Founder & Visa Expert</p>
            </div>
        </div>
    </section>
);

export default About;