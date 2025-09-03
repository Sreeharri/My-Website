import { Briefcase, Code, User } from 'lucide-react'
import React from 'react'

const AboutMe = () => {
  return (
    <section id = 'about' className='py-24 px-24 relative'>
        {" "}
        <div className='container mx-auto max-w-5xl'>
          <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
            About <span className='text-primary'>Me</span>
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
            <div className='space-y-6'> 
              <h3 className='text-xl font-semibold'>Passionate Engineering student & Tech creator</h3>

              <p className='text-muted-foreground'>
                Master’s student in Digital Engineering with a passion for creative problem-solving and innovative thinking. Skilled in software development, machine learning, data analysis, and programming, with a drive to deliver impactful solutions. Adaptable, curious, and eager to contribute to dynamic, forward-focused projects.
              </p>

              <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
                <a href="#contact" className='cosmic-button'>  
                  {" "} 
                  Get  in Touch
                </a>
                <a href="/Sree_Harri_Resume.pdf" download="My_Resume.pdf" className='px-6 py-2 rounded-full bordeer-primary text-primary hover:bg-primary/10 transition-colors duration-300 '>  
                  {" "} 
                  Download Resume
                </a>
              </div>

            </div>

            <div className='grid grid-cols-1 gap-6'>
                <div className='gradient-border p-6 card-hover'>

                  <div className='flex items-start gap-4'>
                    <div className='p-3 rounded-full bg-primary/10'>
                      <Code className='h-6 w-6 text-primary' />
                    </div>

                    <div className='text-left'>
                      <h4 className='font-semibold text-lg'>Web Development</h4>
                      <p>
                        Proficient in building responsive and interactive web applications using modern frameworks and technologies.
                      </p>
                    </div>
                  </div>

                </div>

                <div className='gradient-border p-6 card-hover'>

                  <div className='flex items-start gap-4'>
                    <div className='p-3 rounded-full bg-primary/10'>
                      <User className='h-6 w-6 text-primary' />
                    </div>
                    <div className='text-left'>
                      <h4 className='font-semibold text-lg'>UI/UX Design</h4>
                      <p>
                        Proficient in creating user-centered designs and experiences for web and mobile applications.
                      </p>
                    </div>
                  </div>

                </div>

                <div className='gradient-border p-6 card-hover'>

                  <div className='flex items-start gap-4'>
                    <div className='p-3 rounded-full bg-primary/10'>
                      <Briefcase className='h-6 w-6 text-primary' />
                    </div>
                    <div className='text-left'>
                      <h4 className='font-semibold text-lg'>Software Engineering</h4>
                      <p>
                        Proficient in building scalable and maintainable software solutions using modern programming languages and frameworks.
                      </p>
                    </div>
                  </div>
                  
                </div>
            </div>

          </div>

        </div>
    </section>
  )
}

export default AboutMe
