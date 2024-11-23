const Testimonials = () => (
    <section className="bg-gray-50 py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
          What Our Clients <span className="text-blue-600">Say</span>
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Hear from the individuals and families we have successfully assisted in achieving their dreams.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial Card 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <img
                src="https://via.placeholder.com/60"
                alt="Client"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Sahil Jaan</h3>
                <p className="text-sm text-gray-500">Student Visa</p>
              </div>
            </div>
            <p className="text-gray-600">
              “Vinay Harry and his team were amazing! They made the entire visa process smooth and stress-free. I highly recommend their services.”
            </p>
          </div>
          {/* Testimonial Card 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <img
                src="https://via.placeholder.com/60"
                alt="Client"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Noor ramgaria ji</h3>
                <p className="text-sm text-gray-500">Work Visa</p>
              </div>
            </div>
            <p className="text-gray-600">
              “The professionalism and dedication shown by this team were unparalleled. They ensured my work visa was approved in record time.”
            </p>
          </div>
          {/* Testimonial Card 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <img
                src="https://via.placeholder.com/60"
                alt="Client"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Neha ramgaria</h3>
                <p className="text-sm text-gray-500">Family Visa</p>
              </div>
            </div>
            <p className="text-gray-600">
              “Thanks to Vinay Harry, my family is finally together in Canada. The team’s guidance was invaluable. Highly recommended!”
            </p>
          </div>
          {/* Add more Testimonial Cards as needed */}
        </div>
      </div>
    </section>
  );
  
  export default Testimonials;  