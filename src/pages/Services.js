const Services = () => (
    <section className="bg-white py-10">
        <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-primary mb-6">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="shadow-lg p-4 rounded bg-secondary text-center">
                    <h3 className="font-bold text-xl text-primary">Student Visa</h3>
                    <p>Comprehensive guidance for aspiring students.</p>
                </div>
                <div className="shadow-lg p-4 rounded bg-secondary text-center">
                    <h3 className="font-bold text-xl text-primary">Work Visa</h3>
                    <p>Expert advice for professionals seeking global opportunities.</p>
                </div>
                <div className="shadow-lg p-4 rounded bg-secondary text-center">
                    <h3 className="font-bold text-xl text-primary">Immigration</h3>
                    <p>End-to-end solutions for permanent residency.</p>
                </div>
            </div>
        </div>
    </section>
);

export default Services;