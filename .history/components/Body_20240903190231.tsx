


function Body() {
    return (
        <div>
            <div className="relative w-full h-[400px] bg-cover bg-center text-gray-400" 
         style={{ backgroundImage: 'url("/pic1.jpg")' }}>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
        {/* Larger Text */}
        <h1 className="text-5xl font-bold text-red-700 mb-2">
        Immaculate, spotless, pristine
        </h1>
        {/* Smaller Text */}
        <p className="text-2xl text-red-500">
          Where every corner shines with purity, and every space breathes perfection
        </p>
      </div>
    </div>

    <div>

    </div>

    <div className="space-y-5">

{/* First Section */}
<div className="mt-3 rounded-xl flex flex-col lg:flex-row justify-between p-6 bg-white mx-4">
  <div className="max-w-md text-left mb-6 lg:mb-0 lg:mr-12"> 
    <p className="text-lg font-medium text-gray-700 mt-4 ml-4 lg:ml-10">
      At SD Properties & Cleaning Services, we are committed to delivering exceptional service and building lasting relationships with our clients. Our dedicated team strives to exceed expectations through personalized solutions, attention to detail, and a customer-centric approach.
    </p>
  </div>
  <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-5 mt-4 lg:mr-10 items-center lg:items-start">
    <div className="flex flex-col items-center">
      <img src="stairsb.jpg" alt="Top Image" className="w-64 h-64 rounded-lg shadow-lg border-gray-500 border-solid border-4" />
      <span className="mt-2 text-gray-700 font-medium">Before</span>
    </div>
    <div className="flex flex-col items-center mt-5 lg:mt-0">
      <img src="stairsaft.jpg" alt="Bottom Image" className="w-64 h-64 rounded-lg shadow-lg border-gray-500 border-solid border-4" />
      <span className="mt-2 text-gray-700 font-medium">After</span>
    </div>
  </div>
</div>

{/* Second Section */}
<div className="rounded-xl flex flex-col lg:flex-row justify-between p-6 bg-white mx-4">
  <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-5 mt-4 lg:ml-10 items-center lg:items-start">
    <div className="flex flex-col items-center">
      <img src="tltaft.jpg" alt="Top Image" className="w-64 h-64 rounded-lg shadow-lg border-gray-500 border-solid border-4" />
      <span className="mt-2 text-gray-700 font-medium">Before</span>
    </div>
    <div className="flex flex-col items-center mt-5 lg:mt-0">
      <img src="tltbf.jpg" alt="Bottom Image" className="w-64 h-64 rounded-lg shadow-lg border-gray-500 border-solid border-4" />
      <span className="mt-2 text-gray-700 font-medium">After</span>
    </div>
  </div>
  <div className="max-w-md text-left mt-6 lg:mt-0 lg:mr-12">
    <p className="text-lg font-medium text-gray-700 mt-4 ml-4 lg:ml-10">
      At SD Properties & Cleaning Services, we believe that excellence is not just about providing a spotless finish, it is about serving with integrity, respect, and a deep sense of responsibility. Our commitment to delivering exceptional results begins with listening to our clients’ needs and understanding their unique challenges. We approach every job, no matter the size, with humility and dedication, ensuring that every space we touch is not only clean but cared for.
    </p>
  </div>
</div>

</div>


<div className="mx-4 mt-5 p-6 bg-gray-100 space-y-12">

{/* About Us Section */}
<section className="bg-white p-8 rounded-lg shadow-md">
  <h2 className="text-3xl font-semibold text-gray-800 text-center">About Us</h2>
  <p className="mt-4 text-lg text-gray-700">
    At SD Properties & Cleaning Services, we are dedicated to delivering top-notch service with a strong focus on customer satisfaction. Our commitment to excellence is built on years of expertise in property development and cleaning, and we strive to build lasting relationships with every client we serve.
  </p>
</section>

{/* Mission and Values Section */}
<section className="bg-white p-8 rounded-lg shadow-md">
  <h2 className="text-3xl font-semibold text-gray-800 text-center">Mission and Values</h2>
  <p className="mt-4 text-lg text-gray-700">
    Our mission is to provide high-quality, customized cleaning and property development solutions that exceed client expectations. We value integrity, excellence, and attention to detail in every project we undertake, ensuring that our clients receive the best service every time.
  </p>
</section>

{/* Meet the Team Section */}
<section className="bg-white p-8 rounded-lg shadow-md">
  <h2 className="text-3xl font-semibold text-gray-800 text-center">Meet the Team</h2>
  <div className="flex flex-col lg:flex-row items-center mt-6 space-y-6 lg:space-y-0 lg:space-x-12">
    {/* Managing Director Picture */}
    <img src="/sdkp.jpg" alt="Managing Director" className="w-48 h-48 rounded-full shadow-lg" />
    {/* Bio */}
    <div className="text-center lg:text-left">
      <h3 className="text-xl font-semibold text-gray-800">Sadiq Datti</h3>
      <p className="text-lg text-gray-600">Managing Director</p>
      <p className="mt-4 text-gray-700">
        With over 3 years of experience in property development and cleaning services, John Doe has been instrumental in driving the growth of SD Properties & Cleaning Services. His expertise and leadership ensure that our clients receive the highest standards of service and care.
      </p>
    </div>
  </div>
</section>

{/* Company History Section */}
<section className="bg-white p-8 rounded-lg shadow-md">
  <h2 className="text-3xl font-semibold text-gray-800 text-center">Company History</h2>
  <div className="mt-6 space-y-4">
    {/* Timeline or Paragraphs */}
    <div className="flex flex-col space-y-4">
      <div className="flex items-start space-x-4">
        <span className="text-blue-600 font-semibold">2022</span>
        <p className="text-gray-700">
          SD Properties & Cleaning Services was founded with a mission to offer high-quality cleaning services to local businesses and residences.
        </p>
      </div>
      <div className="flex items-start space-x-4">
        <span className="text-blue-600 font-semibold">2023</span>
        <p className="text-gray-700">
          The company expanded into property development, bringing expertise in both cleaning and real estate to our clients.
        </p>
      </div>
      <div className="flex items-start space-x-4">
        <span className="text-blue-600 font-semibold">2024</span>
        <p className="text-gray-700">
          Today, we serve a broad range of clients, from small businesses to large corporations, continuing to provide top-quality services with a personal touch.
        </p>
      </div>
    </div>
  </div>
</section>

</div>

<div className="p-6 bg-gray-100 space-y-12">

{/* Contact Us Header */}
<section className="bg-white p-8 rounded-lg shadow-md">
  <h2 className="text-3xl font-semibold text-gray-800 text-center">Contact Us</h2>
  <p className="mt-4 text-lg text-gray-700 text-center">
    We’d love to hear from you! Reach out with any questions, comments, or inquiries.
  </p>
</section>

{/* Contact Form Section */}
<section className="bg-white p-8 rounded-lg shadow-md">
  <h3 className="text-2xl font-semibold text-gray-800 text-center mb-6">Contact Form</h3>
  <form className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-gray-700 font-medium">Name</label>
        <input 
          type="text" 
          id="name" 
          className="mt-1 p-2 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="Your Name"
        />
      </div>
      
      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-gray-700 font-medium">Email</label>
        <input 
          type="email" 
          id="email" 
          className="mt-1 p-2 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="Your Email"
        />
      </div>

      {/* Phone Field */}
      <div>
        <label htmlFor="phone" className="block text-gray-700 font-medium">Phone</label>
        <input 
          type="tel" 
          id="phone" 
          className="mt-1 p-2 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="Your Phone Number"
        />
      </div>

      {/* Message Field */}
      <div className="col-span-1 md:col-span-2">
        <label htmlFor="message" className="block text-gray-700 font-medium">Message</label>
        <textarea 
          id="message" 
          rows="4" 
          className="mt-1 p-2 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="Your Message"
        ></textarea>
      </div>
    </div>
    
    {/* Submit Button */}
    <div className="flex justify-center">
      <button 
        type="submit" 
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Submit
      </button>
    </div>
  </form>
</section>

{/* Location Map Section */}
<section className="bg-white p-8 rounded-lg shadow-md">
  <h3 className="text-2xl font-semibold text-gray-800 text-center mb-6">Our Location</h3>
  <div className="w-full h-64">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093645!2d144.95373631531845!3d-37.81720997975168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577a2ab5f34a0d9!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1632989602890!5m2!1sen!2sau"
      width="100%"
      height="100%"
      loading="lazy"
    ></iframe>
  </div>
</section>

{/* Contact Information Section */}
<section className="bg-white p-8 rounded-lg shadow-md">
  <h3 className="text-2xl font-semibold text-gray-800 text-center mb-6">Contact Information</h3>
  <div className="text-center space-y-4">
    <p className="text-lg text-gray-700">
      <strong>Address:</strong> Block F81 Kundila,Zoo Road,Kano State
    </p>
    <p className="text-lg text-gray-700">
      <strong>Email:</strong> contact@sdproperties.com
    </p>
    <p className="text-lg text-gray-700">
      <strong>Phone:</strong> (+234) 456-7890
    </p>
    <div className="flex justify-center space-x-4 mt-4">
      {/* Social Media Icons */}
      <a href="#" className="text-blue-500 hover:text-blue-700">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          {/* Facebook Icon */}
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988H8.898v-2.89h1.54V9.744c0-1.52.916-2.356 2.292-2.356.65 0 1.333.116 1.333.116v1.464h-.751c-.74 0-.97.462-.97.934v1.114h1.647l-.263 2.89h-1.384v6.988C18.343 21.128 22 16.991 22 12z"/>
        </svg>
      </a>
      <a href="#" className="text-blue-400 hover:text-blue-600">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          {/* Twitter Icon */}
          <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.793-1.574 2.163-2.723-.951.562-2.005.971-3.127 1.193-.897-.958-2.178-1.558-3.594-1.558-2.719 0-4.922 2.204-4.922 4.917 0 .388.045.765.127 1.126-4.09-.205-7.719-2.163-10.148-5.144-.424.725-.666 1.564-.666 2.465 0 1.7.87 3.2 2.19 4.078-.807-.026-1.566-.248-2.228-.616v.061c0 2.377 1.693 4.358 3.946 4.806-.413.111-.849.171-1.296.171-.318 0-.626-.031-.928-.087.631 1.963 2.451 3.392 4.604 3.431-1.689 1.323-3.82 2.112-6.138 2.112-.398 0-.79-.023-1.175-.069 2.189 1.401 4.79 2.215 7.585 2.215 9.095 0 14.07-7.54 14.07-14.07l-.015-.64C22.505 6.4 23.34 5.52 23.954 4.569z"/>
        </svg>
      </a>
      <a href="#" className="text-pink-600 hover:text-pink-800">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          {/* Instagram Icon */}
          <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.334 3.608 1.31.975.975 1.248 2.242 1.309 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.334 2.633-1.309 3.608-.975.975-2.242 1.248-3.608 1.309-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.334-3.608-1.309-.975-.975-1.248-2.242-1.309-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.334-2.633 1.309-3.608.975-.975 2.242-1.248 3.608-1.309 1.265-.058 1.645-.07 4.849-.07zM12 0C8.741 0 8.332.015 7.053.073 5.779.132 4.533.4 3.516 1.417 2.5 2.434 2.232 3.68 2.173 4.954.015 8.332 0 8.741 0 12s.015 3.668.073 4.947c.059 1.274.326 2.52 1.343 3.537 1.017 1.017 2.263 1.284 3.537 1.343C8.332 23.985 8.741 24 12 24s3.668-.015 4.947-.073c1.274-.059 2.52-.326 3.537-1.343 1.017-1.017 1.284-2.263 1.343-3.537C23.985 15.668 24 15.259 24 12s-.015-3.668-.073-4.947c-.059-1.274-.326-2.52-1.343-3.537-1.017-1.017-2.263-1.284-3.537-1.343C15.668.015 15.259 0 12 0zm0 5.838A6.162 6.162 0 0 0 5.838 12 6.162 6.162 0 0 0 12 18.162 6.162 6.162 0 0 0 18.162 12 6.162 6.162 0 0 0 12 5.838zm0 10.124A3.963 3.963 0 0 1 8.038 12 3.963 3.963 0 0 1 12 8.038 3.963 3.963 0 0 1 15.962 12 3.963 3.963 0 0 1 12 15.962zm6.406-10.845a1.44 1.44 0 1 1 0-2.88 1.44 1.44 0 0 1 0 2.88z"/>
        </svg>
      </a>
    </div>
  </div>
</section>

</div>





        </div>
        

    )
}

export default Body;