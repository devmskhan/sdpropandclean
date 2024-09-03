


function Header() {
    return (
        <header className="flex justify-between items-center p-4 bg-gray-100 shadow-md">
      {/* Logo on the top left */}
      <div className="flex items-center">
        <Image 
          src="/logo.png" 
          alt="Logo" 
          width={50} 
          height={50} 
          className="cursor-pointer"
        />
      </div>

      {/* Triple line (hamburger) icon on the top right */}
      <div className="cursor-pointer">
        <MenuIcon className="h-8 w-8 text-gray-700" />
      </div>
    </header>
    )
}

export default Header;