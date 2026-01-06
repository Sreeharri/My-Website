import React, { use, useState } from 'react'
import { cn } from '../lib/utils'

const skills = [
    //frontend
    { name: 'HTML/CSS', level: '70', category: 'frontend' },
    { name: 'JavaScript', level: '70', category: 'frontend' },
    { name: 'React', level: '80', category: 'frontend' },
    { name: 'TypeScript', level: '1', category: 'frontend' },
    { name: 'Tailwind CSS', level: '80', category: 'frontend' },
    { name: 'Next.js', level: '1', category: 'frontend' },

    //backend
    { name: "Node.js", level: 80, category: "backend" },
    { name: "Express", level: 75, category: "backend" },
    { name: "MongoDB", level: 70, category: "backend" },
    { name: "PostgreSQL", level: 65, category: "backend" },
    { name: 'Java', level: 60, category: 'backend' },
    { name: 'Spring', level: 50, category: 'backend' },

    // Tools
    { name: "Git/GitHub", level: 90, category: "tools" },
    { name: "Figma", level: 1, category: "tools" },
    { name: "VS Code", level: 95, category: "tools" },

    // devops
    { name: "Docker", level: 70, category: "devops" },
    { name: "AWS", level: 20, category: "devops" },
    { name: "Jenkins", level: 60, category: "devops" },
    { name: "Kubernetes", level: 70, category: "devops" },

    // Machine Learning
    { name: "Python", level: 85, category: "Machine Learning" },
    { name: "NLP", level: 60, category: "Machine Learning" },
    { name: "TensorFlow", level: 70, category: "Machine Learning" },
    { name: "PyTorch", level: 65, category: "Machine Learning" },
    { name: "Scikit-learn", level: 80, category: "Machine Learning" },


    // Data Science
    { name: "Pandas", level: 60, category: "Data Science" },
    { name: "NumPy", level: 70, category: "Data Science" },
    { name: "Matplotlib", level: 55, category: "Data Science" },
    { name: "SQL", level: 75, category: "Data Science" },
    { name: "Tableau", level: 50, category: "Data Science" },
    { name: "Power BI", level: 55, category: "Data Science" },

    
]

const categories = ['all', 'frontend', 'backend', 'tools', 'devops', "Machine Learning", "Data Science"]

const SkillsSection = () => {

    const [activeCategory, setActiveCategory] = useState('all')

    const filterSkills = skills.filter((skill) => activeCategory === 'all' || skill.category === activeCategory)

    return (
        <section id='skills' className='py-24 px-4 relative bg-secondary/30'>

            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
                    My <span className='text-primary'>Skills</span>
                </h2>

                <div className='flex flex-wrap justify-center gap-4 mb-12'>
                    {categories.map((category, key) => (
                        <button key={key} onClick={() => setActiveCategory(category)} className={cn('px-5 py-2 rounded-full transition-colors duration-300 capitalize', activeCategory === category ? 'bg-primary text-primary-foreground' : 'bg-secondary/70 text-foreground hover:bd-secondary')}>
                            {category}
                        </button>
                    ))}
                </div>

                <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {filterSkills.map((skills, key) => (
                        <div key={key} className='bg-card p-6 rounded-lg shadow-xs card-hover'>
                            <div className='text-left mb-4'>
                                <h3 className='font-semibold text-lg'>
                                    {skills.name}
                                </h3>
                            </div>
                            <div className='w-full bg-secondary/50 h-2 rounded-full overflow-hidden'>
                                <div className='bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]' style={{ width: skills.level + '%' }} />
                            </div>

                            <div className='text-right mt-1'>
                                <span className='text-sm text-muted-foreground'>{skills.level}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}

export default SkillsSection
