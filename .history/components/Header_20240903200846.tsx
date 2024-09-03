import Image from "next/image";
import { Bars3Icon } from '@heroicons/react/24/solid'


function Header() {
    return (
      <header className="sticky top-0 z-10 flex justify-between items-center p-4 bg-white shadow-xl">
  <div className="flex items-center space-x-4">
    <Image 
      src="/sdlogo.jpg" 
      alt="Logo" 
      width={70} 
      height={70} 
      className="cursor-pointer"
    />
  
  </div>

  <div className="flex items-center space-x-4">
    <p className="text-gray-800 font-semibold">@ 30% discount</p>
    <button className="px-4 py-2 border border-blue-500 text-blue-500 font-medium rounded-md hover:bg-blue-500 hover:text-white transition duration-300">
      Book Now
    </button>
    <div className="px-3 py-2 rounded-full border text-gray-800 border-gray-300">
      +234-7032187241
    </div>
  </div>

  <div className="cursor-pointer">
    <Bars3Icon className="h-8 w-8 text-gray-700" />
  </div>
</header>

    
    )
}

export default Header;