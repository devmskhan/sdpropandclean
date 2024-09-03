


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

    <div className="flex flex-col items-center justify-center p-6 bg-gray-100">
  <div className="max-w-lg text-center">
    <p className="text-lg font-medium text-gray-700">
      At SD Properties & Cleaning Services, we are committed to delivering exceptional service and building lasting relationships with our clients. Our dedicated team strives to exceed expectations through personalized solutions, attention to detail, and a customer-centric approach.
    </p>
  </div>
  <div className="relative mt-6">
    <img src="stairsb.jpg" alt="Top Image" className="w-64 h-64 rounded-lg shadow-lg" />
    <img src="stairsaft.jpg" alt="Bottom Image" className="absolute bottom-0 left-0 w-64 h-64 rounded-lg shadow-lg transform translate-x-4 translate-y-4 ml-25 border border-white border-solid" />
  </div>
</div>

        </div>
        

    )
}

export default Body;