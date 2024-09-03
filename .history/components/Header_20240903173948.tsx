import Image from "next/image";
import { Bars3Icon } from '@heroicons/react/24/solid'


function Header() {
    return (
      <header className="sticky top-0 z-10 flex justify-between items-center p-4  shadow-xl">
      <div className="flex items-center">
        <Image 
          src="/sdlogo.jpg" 
          alt="Logo" 
          width={50} 
          height={50} 
          className="cursor-pointer"
        />
      </div>
    
      <div className="cursor-pointer">
        <Bars3Icon className="h-8 w-8 text-gray-700" />
      </div>
    </header>
    
    )
}

export default Header;