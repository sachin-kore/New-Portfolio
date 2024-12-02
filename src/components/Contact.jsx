import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { useState } from 'react'
import { useTheme } from '../Utils/ThemeContext'

const Contact = () => {
  const { theme } = useTheme()
  const dark = theme === 'dark'

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 1000)
  }
  return (
    <section
      id="contact"
      className={`py-20 ${dark ? 'bg-gray-900' : 'bg-white'} `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <h3
                className={`${
                  dark ? 'text-gray-300' : 'text-gray-600'
                } text-2xl font-semibold mb-6`}
              >
                Let's Connect
              </h3>
              <p
                className={`text-gray-600 ${dark ? 'text-gray-300' : ''} mb-8`}
              >
                I'm always open to discussing new projects, creative ideas or
                opportunities to be part of your visions.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: <Mail />,
                  label: 'Email',
                  value: 'sachinkore085@.com',
                },
                {
                  icon: <Phone />,
                  label: 'Phone',
                  value: '+91 8618092957',
                },
                {
                  icon: <MapPin />,
                  label: 'Bangalore',
                  value: 'ITPL whitefield Bangalore',
                },
              ].map((item, index) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="p-3 bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-lg">
                    {item.icon}
                  </div>
                  <div>
                    <div
                      className={`${
                        dark ? 'text-gray-300' : 'text-gray-600'
                      } font-medium`}
                    >
                      {item.label}
                    </div>
                    <div
                      className={`${dark ? 'text-gray-300' : 'text-gray-600'} `}
                    >
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
            <div className="relative">
              <input
                type="text"
                id="name"
                value={formState.name}
                onChange={(e) =>
                  setFormState({ ...formState, name: e.target.value })
                }
                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:border-purple-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="name"
                className="absolute left-4 top-2 text-gray-500 transition-all duration-200 -translate-y-8 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-8 peer-focus:text-purple-600"
              >
                Your Name
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                value={formState.email}
                onChange={(e) =>
                  setFormState({ ...formState, email: e.target.value })
                }
                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:border-purple-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="email"
                className="absolute left-4 top-2 text-gray-500 transition-all duration-200 -translate-y-8 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-8 peer-focus:text-purple-600"
              >
                Your Email
              </label>
            </div>

            <div className="relative">
              <textarea
                id="message"
                value={formState.message}
                onChange={(e) =>
                  setFormState({ ...formState, message: e.target.value })
                }
                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:border-purple-600 peer h-32 resize-none"
                placeholder=" "
                required
              />
              <label
                htmlFor="message"
                className="absolute left-4 top-2 text-gray-500 transition-all duration-200 -translate-y-8 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-8 peer-focus:text-purple-600"
              >
                Your Message
              </label>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Send Message
            </button>

            {isSubmitted && (
              <div className="fixed bottom-8 right-8 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-fade-in">
                Message sent successfully!
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
