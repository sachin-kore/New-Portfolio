import { Menu, Moon, Sun, X } from 'lucide-react'
import { useState } from 'react'
import { useTheme } from '../Utils/ThemeContext'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const dark = theme === 'dark'

  return (
    <nav
      className={`fixed w-full  ${
        dark ? 'bg-gray-900/80' : 'bg-white/80'
      } backdrop-blur-sm z-50 transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 font-bold text-2xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Portfolio
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className={` ${
                dark ? 'text-gray-200 hover:text-purple-600' : 'text-gray-700'
              }  dark:hover:text-purple-400 transition-colors`}
            >
              Home
            </a>
            <a
              href="#projects"
              className={` ${
                dark ? 'text-gray-200 hover:text-purple-600' : 'text-gray-700'
              }  dark:hover:text-purple-400 transition-colors`}
            >
              Projects
            </a>
            <a
              href="#skills"
              className={` ${
                dark ? 'text-gray-200 hover:text-purple-600' : 'text-gray-700'
              }  dark:hover:text-purple-400 transition-colors`}
            >
              Skills
            </a>
            <a
              href="#about"
              className={` ${
                dark ? 'text-gray-200 hover:text-purple-600' : 'text-gray-700'
              }  dark:hover:text-purple-400 transition-colors`}
            >
              About
            </a>
            <a
              href="#contact"
              className={` ${
                dark ? 'text-gray-200 hover:text-purple-600' : 'text-gray-700'
              }  dark:hover:text-purple-400 transition-colors`}
            >
              Contact
            </a>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-white" />
              ) : (
                <Moon className="w-5 h-5 " />
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isOpen ? (
                <X className={`w-6 h-6 ${dark ? 'text-white' : ''}`} />
              ) : (
                <Menu className={`w-6 h-6 ${dark ? 'text-white' : ''}`} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}

      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className=" flex flex-col px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="#home"
            className={` ${
              dark ? 'text-gray-200 hover:text-purple-600' : 'text-gray-700'
            }  dark:hover:text-purple-400 transition-colors block px-3 py-2 text-base font-medium`}
            // className=" block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-600 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            Home
          </a>
          <a
            href="#projects"
            className={` ${
              dark ? 'text-gray-200 hover:text-purple-600' : 'text-gray-700'
            }  dark:hover:text-purple-400 transition-colors block px-3 py-2 text-base font-medium`}
          >
            Projects
          </a>
          <a
            href="#skills"
            className={` ${
              dark ? 'text-gray-200 hover:text-purple-600' : 'text-gray-700'
            }  dark:hover:text-purple-400 transition-colors block px-3 py-2 text-base font-medium`}
          >
            Skills
          </a>
          <a
            href="#about"
            className={` ${
              dark ? 'text-gray-200 hover:text-purple-600' : 'text-gray-700'
            }  dark:hover:text-purple-400 transition-colors block px-3 py-2 text-base font-medium`}
          >
            About
          </a>
          <a
            href="#contact"
            className={` ${
              dark ? 'text-gray-200 hover:text-purple-600' : 'text-gray-700'
            }  dark:hover:text-purple-400 transition-colors block px-3 py-2 text-base font-medium`}
          >
            Contact
          </a>
          <button
            onClick={toggleTheme}
            className={` ${
              dark ? 'text-gray-200 hover:text-purple-600' : 'text-gray-700'
            }  dark:hover:text-purple-400 transition-colors text-left px-3 py-2`}
          >
            {dark ? 'Light' : 'Dark'}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
