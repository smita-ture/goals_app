const NavComponent = () => {
    return (
        <>
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span role="heading" className="font-semibold text-xl tracking-tight">Goals</span>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a role="menu" href="/" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Home
            </a>
            <a role="menu" href="/about" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              About us
            </a>
          </div>
        </div>
      </nav>
        </>
    )
}

export default NavComponent