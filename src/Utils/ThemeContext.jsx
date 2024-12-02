import { createContext, useState, useContext } from 'react'

// Create the ThemeContext
const ThemeContext = createContext()

// Create the ThemeProvider
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

// Default export the ThemeProvider
export default ThemeProvider

// Export the ThemeContext to use it with useContext
export const useTheme = () => useContext(ThemeContext)
