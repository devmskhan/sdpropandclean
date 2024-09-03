


function Body() {
    return (
        <div className="relative w-full h-56 bg-cover bg-center text-white" 
         style={{ backgroundImage: 'url("/background-image.jpg")' }}>
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
    )
}

export default Body;