


function Body() {
    return (
        <div>
            <div className="relative w-full h-[400px] bg-cover bg-center text-gray-400" 
         style={{ backgroundImage: 'url("/pic1.jpg")' }}>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
        {/* Larger Text */}
        <h1 className="text-5xl font-bold font- mb-2">
        Immaculate, spotless, pristine
        </h1>
        {/* Smaller Text */}
        <p className="text-2xl">
          Smaller Text Below
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



        </div>
        

    )
}

export default Body;