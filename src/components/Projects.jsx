import { ExternalLink, Github } from 'lucide-react'
import { useState } from 'react'
import { useTheme } from '../Utils/ThemeContext'
import NirmanPic from '../assets/images/NirmanConstruction-img.png'

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
      demoLink: '',
      githubLink: 'https://github.com/sachin-kore/MERN-Proshop-App',
    },

    {
      title: 'TMDB movie Api clone',
      description:
        'Apis to fetch trending movies see the details of the movie search movies and watch',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRBwpgg4OU-F9-v0DaLoqPMSGIr2nN4IIIGKThOhf7kTI3H9Jw-c38SIvSXCR2Mj139Og&usqp=CAU',
      category: 'Mobile',
      techStack: ['React js', 'html', 'JavaScript', 'axios', 'sass', 'Redux'],
      demoLink: '',
      githubLink: 'https://github.com/sachin-kore/Movix-OTT-Plotform',
    },
    {
      title: 'Booking.com clone app ',
      description: 'we can book hotels anywhere in cities',
      image:
        'data:image/png;base64,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',
      category: 'Mobile',
      techStack: ['React js', 'html', 'JavaScript', 'axios', 'css', 'Redux'],
      demoLink: '',
      githubLink: 'https://github.com/sachin-kore/Booking.com-clone',
    },
    {
      title: 'Home Construction ',
      description:
        'You can book an appointement with us . We will will plan build your house  anywhere in cities',
      image: NirmanPic,
      category: 'Mobile',
      techStack: ['React js', 'html', 'JavaScript', 'axios', 'css', 'Redux'],
      demoLink: 'https://nirmaanconstructioncom.netlify.app/',
      githubLink:
        '  https://github.com/sachin-kore/Home-construction-repo-Project',
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
                      href={project.demoLink}
                      className="flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                    <a
                      href={project.githubLink}
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
