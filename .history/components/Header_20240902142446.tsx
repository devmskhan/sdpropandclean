import Image from "next/image";
import { Bars3Icon } from '@heroicons/react/24/solid'


function Header() {
    return (
        <header className="sticky top-0 flex justify-between items-center p-4 bg-blue-600 shadow-md">
      {/* Logo on the top left */}
      <div className="flex items-center">
        <Image 
          src="/logo.png" 
          alt="Logo" 
          width={100} 
          height={100} 
          className="cursor-pointer"
        />
      </div>

      {/* Triple line (hamburger) icon on the top right */}
      <div className="cursor-pointer">
        <Bars3Icon className="h-8 w-8 text-gray-700" />
      </div>
    </header>
    )
}

export default Header;