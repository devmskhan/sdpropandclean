


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


<div className="p-6 bg-gray-100 space-y-12">

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
    <img src="/sdk.jpg" alt="Managing Director" className="w-48 h-48 rounded-full shadow-lg" />
    {/* Bio */}
    <div className="text-center lg:text-left">
      <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
      <p className="text-lg text-gray-600">Managing Director</p>
      <p className="mt-4 text-gray-700">
        With over 20 years of experience in property development and cleaning services, John Doe has been instrumental in driving the growth of SD Properties & Cleaning Services. His expertise and leadership ensure that our clients receive the highest standards of service and care.
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
        <span className="text-blue-600 font-semibold">2000</span>
        <p className="text-gray-700">
          SD Properties & Cleaning Services was founded with a mission to offer high-quality cleaning services to local businesses and residences.
        </p>
      </div>
      <div className="flex items-start space-x-4">
        <span className="text-blue-600 font-semibold">2010</span>
        <p className="text-gray-700">
          The company expanded into property development, bringing expertise in both cleaning and real estate to our clients.
        </p>
      </div>
      <div className="flex items-start space-x-4">
        <span className="text-blue-600 font-semibold">2022</span>
        <p className="text-gray-700">
          Today, we serve a broad range of clients, from small businesses to large corporations, continuing to provide top-quality services with a personal touch.
        </p>
      </div>
    </div>
  </div>
</section>

</div>




        </div>
        

    )
}

export default Body;