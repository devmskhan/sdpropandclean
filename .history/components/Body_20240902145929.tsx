


function Body() {
    return (
        <div>
            <div className="relative w-full h-[400px] bg-cover bg-center text-white" 
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

        </div>
        

    )
}

export default Body;