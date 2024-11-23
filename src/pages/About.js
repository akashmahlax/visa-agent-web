const About = () => (
    <section className="bg-gray-200 py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
          About <span className="text-blue-600">Vinay Harry</span>
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          With over a decade of experience, Vinay Harry has been a trusted advisor to thousands of individuals and families navigating the complexities of visa applications. We specialize in student, work, and family visas, ensuring a stress-free and personalized experience for every client.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-secondary shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-700">Our Mission</h3>
            <p className="text-gray-600 mt-2">
              To empower individuals by providing clear, reliable, and efficient visa solutions tailored to their unique goals.
            </p>
          </div>
          <div className="bg-secondary shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-700">Our Vision</h3>
            <p className="text-gray-600 mt-2">
              To be the most trusted and innovative visa consultancy globally, creating seamless pathways to international opportunities.
            </p>
          </div>
          <div className="bg-secondary shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-700">Our Values</h3>
            <p className="text-gray-600 mt-2">
              Transparency, dedication, and excellence are the cornerstones of our service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
  
  export default About;
  