import { ExternalLink, Github } from 'lucide-react'
import { useState } from 'react'
import { useTheme } from '../Utils/ThemeContext'

const Projects = () => {
  const { theme } = useTheme()
  const dark = theme === 'dark'
  const [activeCategory, setActiveCategory] = useState('All')
  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'A full-featured e-commerce platform with cart functionality and payment integration',
      image:
        'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80',
      category: 'Websites',
      techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      demoLink: 'https://demo.com',
      githubLink: 'https://github.com',
    },
    {
      title: 'Task Management App',
      description:
        'A collaborative task management application with real-time updates',
      image:
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
      category: 'Applications',
      techStack: ['Vue.js', 'Firebase', 'Tailwind CSS'],
      demoLink: 'https://demo.com',
      githubLink: 'https://github.com',
    },
    {
      title: 'Fitness Tracking App',
      description: 'Mobile application for tracking workouts and nutrition',
      image:
        'https://images.unsplash.com/photo-1461773518188-b3e86f98242f?auto=format&fit=crop&w=800&q=80',
      category: 'Mobile',
      techStack: ['React Native', 'TypeScript', 'Redux'],
      demoLink: 'https://demo.com',
      githubLink: 'https://github.com',
    },
  ]

  const categories = ['All', 'Websites', 'Applications', 'Mobile']

  return (
    <section
      id="projects"
      className={`py-20 ${dark ? 'bg-gray-800' : 'bg-gray-50'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-8">
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            My Projects
          </span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 text-white rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 '
                  : 'bg-white dark:bg-gray-700  hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            return (
              <div
                className={`group ${
                  dark ? 'bg-gray-700' : 'bg-white'
                } rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in`}
                key={project.title}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3
                    className={`${
                      dark ? 'text-gray-300' : 'text-black'
                    } text-xl font-semibold mb-2`}
                  >
                    {project.title}
                  </h3>
                  <p
                    className={`${
                      dark ? 'text-gray-300' : 'text-gray-600'
                    } mb-4`}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 text-sm bg-purple-100 dark:bg-purple-900/30 ${
                          dark ? 'text-purple-300' : 'text-purple-600'
                        }  rounded-full`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={'/'}
                      className="flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                    <a
                      href={'/'}
                      className={`flex items-center gap-2 ${
                        dark ? 'text-purple-400' : 'text-purple-600'
                      }  hover:text-purple-700 `}
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
