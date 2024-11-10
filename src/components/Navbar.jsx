import { useState } from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa"
import logo from "/public/assets/logo.png"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "#about-me", label: "About Me" },
    { href: "#skills", label: "Skills" },
    { href: "#technologies", label: "Technologies" },
    { href: "#projects", label: "Projects" },
    { href: "#blog", label: "Blog" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-lightgray bg-opacity-95 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="" aria-label="Home">
              <img src={logo} className="h-8 w-auto sm:h-10" alt="logo" />
            </a>
          </div>
          
          <div className="hidden md:block">
            <ul className="flex space-x-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="hidden md:flex items-center space-x-4 text-xl">
            <a
              href="https://www.linkedin.com/in/coste-ionut-7531312bb/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-600 hover:text-blue-700 transition-colors duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/ionutpetru4046"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-600 hover:text-orange-700 transition-colors duration-300"
            >
              <FaGithub />
            </a>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5 space-x-4">
              <a
                href="https://www.linkedin.com/in/coste-ionut-7531312bb/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-600 hover:text-blue-700 transition-colors duration-300"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a
                href="https://github.com/ionutpetru4046"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-600 hover:text-orange-700 transition-colors duration-300"
              >
                <FaGithub className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}