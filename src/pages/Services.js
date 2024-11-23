const Ser = () => (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 leading-tight">
          Our <span className="text-blue-600">Services</span>
        </h2>
        <p className="mt-4 text-lg text-center text-gray-600">
          Comprehensive visa consultancy services tailored to your unique needs.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <div className="bg-gray-50 shadow-lg rounded-lg p-6 text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
              <i className="text-blue-600 text-2xl fas fa-graduation-cap"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-700">Student Visas</h3>
            <p className="text-gray-600 mt-2">
              Tailored guidance to help students achieve their academic aspirations abroad.
            </p>
          </div>
          {/* Service Card 2 */}
          <div className="bg-gray-50 shadow-lg rounded-lg p-6 text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-indigo-100 rounded-full flex items-center justify-center">
              <i className="text-indigo-600 text-2xl fas fa-briefcase"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-700">Work Visas</h3>
            <p className="text-gray-600 mt-2">
              Expert assistance to secure work permits and opportunities globally.
            </p>
          </div>
          {/* Service Card 3 */}
          <div className="bg-gray-50 shadow-lg rounded-lg p-6 text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
              <i className="text-purple-600 text-2xl fas fa-users"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-700">Family Visas</h3>
            <p className="text-gray-600 mt-2">
              Helping families reunite and build lives together across borders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
  
  export default Ser;  