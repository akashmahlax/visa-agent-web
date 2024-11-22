import ContactForm from '../components/ContactForm';

const Contact = () => (
    <section className="bg-white py-10">
        <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">Contact Us</h2>
            <p className="text-lg text-gray-700 mb-4">
                Have questions or need assistance? Fill out the form below, and we'll get back to you as soon as possible.
            </p>
            <ContactForm />
        </div>
    </section>
);

export default Contact;
