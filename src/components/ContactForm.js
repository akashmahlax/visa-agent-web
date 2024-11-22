const ContactForm = () => (
    <form
        className="max-w-lg mx-auto bg-gray-50 p-6 shadow-lg rounded"
        onSubmit={(e) => e.preventDefault()}
    >
        <div className="mb-4">
            <label className="block text-primary font-bold mb-2" htmlFor="name">Name</label>
            <input
                type="text"
                id="name"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-primary"
                placeholder="Your Name"
            />
        </div>
        <div className="mb-4">
            <label className="block text-primary font-bold mb-2" htmlFor="email">Email</label>
            <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-primary"
                placeholder="Your Email"
            />
        </div>
        <div className="mb-4">
            <label className="block text-primary font-bold mb-2" htmlFor="message">Message</label>
            <textarea
                id="message"
                rows="4"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-primary"
                placeholder="Your Message"
            />
        </div>
        <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded hover:bg-accent transition"
        >
            Submit
        </button>
    </form>
);

export default ContactForm;
