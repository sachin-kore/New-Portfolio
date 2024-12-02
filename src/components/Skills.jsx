import {
  Cloud,
  Code2,
  Database,
  GitBranch,
  Layout,
  Server,
  Smartphone,
  Terminal,
} from 'lucide-react'
import { useTheme } from '../Utils/ThemeContext'

const Skills = () => {
  const { theme } = useTheme()
  const dark = theme === 'dark'
  const skills = [
    {
      name: 'Frontend Development',
      icon: <Layout />,
      level: 90,
      category: 'Development',
    },
    {
      name: 'Backend Development',
      icon: <Server />,
      level: 85,
      category: 'Development',
    },
    {
      name: 'Database Management',
      icon: <Database />,
      level: 80,
      category: 'Development',
    },
    {
      name: 'Mobile Development',
      icon: <Smartphone />,
      level: 75,
      category: 'Development',
    },
    {
      name: 'Version Control',
      icon: <GitBranch />,
      level: 95,
      category: 'Tools',
    },
    { name: 'Cloud Services', icon: <Cloud />, level: 70, category: 'Tools' },
    { name: 'Command Line', icon: <Terminal />, level: 85, category: 'Tools' },
    {
      name: 'Problem Solving',
      icon: <Code2 />,
      level: 90,
      category: 'Soft Skills',
    },
  ]

  return (
    <section
      id="skills"
      className={`${dark ? 'bg-gray-900' : 'bg-white'} py-20`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Skills & Expertise
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`group p-6 rounded-xl hover:shadow-lg transition-all duration-300 animate-fade-in ${
                dark ? 'bg-gray-800' : 'bg-gray-50'
              } `}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-lg">
                  {skill.icon}
                </div>
                <h3
                  className={`${
                    dark ? 'text-gray-300' : 'text-gray-600'
                  }  font-semibold `}
                >
                  {skill.name}
                </h3>
              </div>
              <div
                className={`relative h-2 ${
                  dark ? 'bg-gray-700' : 'bg-gray-200'
                }   rounded-full overflow-hidden`}
              >
                <div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: '0%',
                    animation: 'growWidth 1.5s ease-out forwards',
                    animationDelay: `${index * 100 + 500}ms`,
                  }}
                />
                <style>{`
                @keyframes growWidth {
                  from { width: 0% }
                  to { width: ${skill.level}% }
                }
              `}</style>
              </div>
              <div className="mt-2 text-sm text-right text-gray-600 dark:text-gray-400">
                {skill.level}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
