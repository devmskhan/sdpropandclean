


function Body() {
    return (
        <div>
            <div className="relative w-full h-[400px] bg-cover bg-center text-gray-400" 
         style={{ backgroundImage: 'url("/pic1.jpg")' }}>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
        {/* Larger Text */}
        <h1 className="text-5xl font-bold mb-2">
          Big Text
        </h1>
        {/* Smaller Text */}
        <p className="text-2xl">
          Smaller Text Below
        </p>
      </div>
    </div>

    <div>

    </div>

      <div className="flex justify-between p-6 bg-gray-100">
  <div className="max-w-md text-left mr-12"> {/* Increased margin-right for larger space */}
    <p className="text-lg font-medium text-gray-700 mt-4 ml-10">
      At SD Properties & Cleaning Services, we are committed to delivering exceptional service and building lasting relationships with our clients. Our dedicated team strives to exceed expectations through personalized solutions, attention to detail, and a customer-centric approach.
    </p>
  </div>
  <div className="relative mt-4 mr-10">
    <img 
      src="stairsb.jpg" 
      alt="Top Image" 
      className="w-64 h-64 rounded-lg shadow-lg border-gray-500 border-solid border-4 " 
      style={{ zIndex: 10 }} // Adds a bit of depth to the rotation 
    />
    <img 
      src="stairsaft.jpg" 
      alt="Bottom Image" 
      className="absolute bottom-0 left-0 w-64 h-64 rounded-lg shadow-lg border-gray-500 border-solid border-4m" 
    />
  </div>
</div>


        </div>
        

    )
}

export default Body;