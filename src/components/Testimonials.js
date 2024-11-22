
const Testimonials = () => (
    <section className="bg-secondary py-10">
        <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-4 shadow-md rounded bg-white">
                    <p className="text-gray-700 italic">"Vinay Harry made my visa process stress-free and smooth. Highly recommend!"</p>
                    <h4 className="mt-4 text-primary font-semibold">- Amandeep Singh</h4>
                </div>
                <div className="p-4 shadow-md rounded bg-white">
                    <p className="text-gray-700 italic">"Thanks to their expert advice, I'm now studying in Canada!"</p>
                    <h4 className="mt-4 text-primary font-semibold">- Priya Sharma</h4>
                </div>
                <div className="p-4 shadow-md rounded bg-white">
                    <p className="text-gray-700 italic">"Professional and reliable services. My PR application was handled excellently."</p>
                    <h4 className="mt-4 text-primary font-semibold">- Ravi Verma</h4>
                </div>
            </div>
        </div>
    </section>
);

export default Testimonials;
